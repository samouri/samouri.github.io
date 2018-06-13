---
layout: page
title: making bucklefrog
permalink: /learning-bs/
---

# BuckleFrog: learning OCaml and Bucklescript by building Frogger

Ever since taking  programming languages in college, I've been enamored with functional programming and the benefits that a type system like OCaml's has to offer. When writing Java programs, I'm surprised if my code runs without a NullPointerException, whereas I remember that my OCaml programs usually worked flawlessly on my first attempt to run them.

[TOC]

### Summary

The project is to implement retro style Frogger, adhering to the original game's behavior as closely as possible.  I chose frogger because I wanted something in between drop-dead simple like Pong and more complex like Doom.  I started this project barely being able to write a Hello World program in OCaml, and by the end of it I have a solid understanding of all of OCaml's fundamentals (functions, modules, type signatures, variant types, etc), and even learned about the OCaml/JavaScript FFI (foreign function interface).  While in reality the actual development process often vacillated between an investigation mode and programming, for the purposes of this article, I'm going to pretend as if I followed a more classic waterfall method.

### Investigation

Like most impatient developers, the first thing I did was I dive right into development with absolutely no plan.  At the point where I had a sprite that could move via arrow keys, I came to the realization that nothing was feeling quite right.  There are so many little nuanced questions I needed to answer in order to be able to create a Frogger clone that felt true.  Questions like whether the game runs on a grid or in "continuous" space, how many frames are there in the frog's jump animation.  When the frog jumps, does he *slide* or *teleport*.  What is the aspect ratio of the screen? How much space should each lane take up? How does collision detection work?  Is the strictness of collision detection different depending on if the frog is colliding with a log, turtle, alligator, car, or the end goals?  All of these questions (and more) needed answering.  I used many sources to try to piece together everything I could.

#### graphics

The 1981 Arcade version of Frogger ran with raster graphics and resolution of 224 x 256 [^1].  By doing some calculations and also overlaying a ruler[^2] onto a screenshot of the game, I was able to determine that the screen is laid out on a grid of 16 rows and 14 columns.  In order, the rows get used as follows:

- 1.5 rows for the game score
- 1.5 rows for the end goal
- The next 12 rows are used to represent 1 game lane each. 
- The last (and 16th) row holds the life count and countdown timer.

#### mechanics

I found a couple of really great instructions online that go into depth explaining how gameplay works. One on 20goto0 [^3] and the other from gamefaqs [^4].  Heres a short summary:

- Movement: By slowing down videos of Frogger being played, I could tell that the frog doesn't teleport, rather he moves exactly one `tileWidth` per jump and it takes about 100ms. while the game is laid out on a grid, everything within that grid moves on a pixel by pixel basis (continously).
- The first half of the lanes have cars that the frog must avoid.  The second half requires the frog to land on the floating logs and turtles.  The frog can move while on a log. 
- The frog has to land in all five coves in order to advance to the next level.
- In later stages, alligators and snakes are brought which increase the difficulty.

### Development

#### getting started: build system

The first step is getting the whole build pipeline in place.  For this I used the standard [bsb](https://bucklescript.github.io/docs/en/new-project.html) setup in order to compile `.ml` files to javascript. From there I can use [parcel](https://parceljs.org/) pointed at my `index.html` file to build the project.  Since we are using Canvas, there is no need for any third party libs. I was really happy with this setup since every single save takes less than 100ms to compile.

#### **setting up the game loop**

Most games have what is called the "game loop". It periodically updates the state of the game and renders the screen.  Heres roughly how it looks for Frogger. 

```ocaml
let lastTime = ref 0;; (* for keeping track of how much time elapsed in between frames *)

(* the gameloop. takes the rendering context and the world (game state) *)
let rec gameloop ctx world = 
  (* first calculate elapsed time *)
  let dt = (Js.Date.now ()) -. !lastTime in
  
  (render ctx world);
  let nextWorld = (updateWorld world dt) in
  
  (* set lastTime to now and queue the next gameloop *)
  lastTime := Js.Date.now ();
  (Webapi.requestAnimationFrame (fun _ -> (gameloop ctx nextWorld )))
;;
```

### handling user input

In Frogger there isn't really a notion of "left arrow pressed". Instead there was a joystick that could signal direction.  In order to emulate that, I map arrow key presses to a "direction" type:

```ocaml
(* laughably unsafe type conversion *)
external toUnsafe : 'a -> < .. > Js.t = "%identity"

type directionT = Left | Right | Up | Down;;
type inputT = {
  mutable direction: directionT option;
};;
let input = { direction = None };;

(* Keydown event handler translates a key press to a direction *)
let keydown (evt:Dom.event) =
  match (toUnsafe evt)##keyCode with
  | 38 | 32 | 87 -> input.direction <- Some Up
  | 39 | 68 -> input.direction <- Some Right
  | 37 | 65 -> input.direction <- Some Left
  | 40 | 83 -> input.direction <- Some Down
  | _ -> ()
;;
```

#### To Be Continued

### sources

[^1]: https://en.wikipedia.org/wiki/Frogger
[^2]: ![Screenshot with Ruler](/frogger-ruler.png)
[^3]: http://www.20goto10.co.uk/frogger/instructions.html
[^4]: https://gamefaqs.gamespot.com/snes/577129-frogger/faqs/7869

