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

Like most impatient developers, the first thing I did was I dive right into development with absolutely no plan.  At the point where I had a sprite that could move via arrow keys, I came to the realization that nothing was feeling quite right.  There are so many little nuanced questions I needed to answer in order to be able to create a Frogger clone that felt true.  Questions like whether the game runs on a grid or in "continuous" space, how many frames are there in the frog's jump animation.  When the frog jumps, does he *slide* or *teleport*.  What is the aspect ratio of the screen? How much space should each lane take up? How does collision detection work?  Is the strictness of collision detection different depending on if the frog is colliding with a log, turtle, alligator, car, or the end goals?  All of these questions (and more) needed answering.  I used many sources to try to piece together everything I could, and the details and sources are below:

#### graphics

The 1981 Arcade version of Frogger ran with raster graphics and resolution of 224 x 256 [^1].  By doing some calculations and also overlaying a ruler[^2] onto a screenshot of the game, I was able to determine that the screen is laid out on a grid of 14 columns and 16 rows.  The rows get used as follows:

- 1.5 rows for the game score
- 1.5 rows for the end goal
- The next 12 rows are used to represent 1 game lane each. 
- The last (and 16th) row holds the life count and countdown timer.

#### mechanics

I found a couple of really great instructions online that go into depth explaining how gameplay works. One on 20goto0 [^3] and the other from gamefaqs [^4].  Heres a short summary of the key points:

- Movement: By slowing down videos of Frogger being played, I could tell that the frog doesn't teleport, rather he moves exactly one `tileWidth` per jump and it takes about 100ms. while the game is laid out on a grid, everything within that grid moves on a pixel by pixel basis (continously).
- The first half of the lanes have cars that the frog must avoid.  The second half requires the frog to land on the floating logs and turtles.  When the frog is on a log (or turtle), the velocity of the frog is the velocity of the (log + frog), or "Lefrog". 
- The frog has to land in all five coves in order to advance to the next level.




I'd never really played Frogger in the past and was surprised at every turn as I learned just how nuanced the game really is. The first thing I tried doing was building it as fast as possible using squares as graphics but I quickly learned that there were so many more details and nuances that actually needed careful consideration and research to get right.  I was able to find a couple good descriptions of the game online ([1](https://gamefaqs.gamespot.com/snes/577129-frogger/faqs/7869),[2](http://www.20goto10.co.uk/frogger/instructions.html)) online as well as a [spritesheet](https://samouri.github.io/bucklefrog/frogger_sprites.ae354d37.png) which covered the graphics I would need.

### Development

#### getting started: build system

The first step is getting the whole build pipeline in place.  For this I used the standard [bsb](https://bucklescript.github.io/docs/en/new-project.html) setup in order to compile `.ml` files to javascript. From there I can use [parcel](https://parceljs.org/) pointed at my `index.html` file to build the project.  Since we are using Canvas, there is no need for any third party libs. I was really happy with this setup since every single save takes less than 100ms to compile.

#### **setting up the game loop**

```ocaml
(* the gameloop. takes the rendering context and the world (game state) *)
let rec gameloop ctx world = 
  (* first calc how much time has passed since the last frame *)
  let now = Js.Date.now () in
  let dt = now -. !lastTime in
  
  (* render all sprites to the canvas *)
  (render ctx world);
  let nextWorld = (updateWorld ctx world) in
  
  (* set lastTime to now and queue the next gameloop *)
  lastTime := Js.Date.now ();
  (Webapi.requestAnimationFrame (fun _ -> (gameloop ctx nextWorld )))
;;

(* load finds the canvas on the page, grabs the 2d context, 
   and then initiates the gameloop
 *)
let load _ =
  let canvas_id = "canvas" in
  let canvas =
    match document |> (Document.getElementById "canvas") with
    | None  ->
      (print_endline ("cant find canvas " ^ (canvas_id ^ " \n"));
       failwith "fail")
    | Some el -> el in
  canvas |> (Element.setAttribute "height" ((string_of_int startWorld.height) ^ "px"));
  canvas |> (Element.setAttribute "width" ((string_of_int startWorld.width) ^ "px"));
  let context = CanvasRe.CanvasElement.getContext2d canvas in
  (gameloop context startWorld);
;;

(* call the load function when the page is ready *)
let _ = Window.setOnLoad window load
```

### sources

[^1]: https://en.wikipedia.org/wiki/Frogger
[^2]: ![Screenshot with Ruler](/frogger-ruler.png)
[^3]: http://www.20goto10.co.uk/frogger/instructions.html
[^4]: https://gamefaqs.gamespot.com/snes/577129-frogger/faqs/7869

