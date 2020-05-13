---
layout: post
title: Making Canvas Games with OCaml
permalink: /learning-bs/
date: 2018-06-13
---

# Making Canvas Games with OCaml

Ever since [CMSC330](http://www.cs.umd.edu/class/spring2019/cmsc330/), I've been enamored with OCaml as a language that makes large classes of bugs impossible. While usage of OCaml has largely been confined to academia and [Jane Street](https://blog.janestreet.com/), it recently gained new life in the web space thanks to projects like [Bucklescript](https://bucklescript.github.io/) and [Reason](https://reasonml.github.io/).

I created [buckle-frogger](https://samouri.github.io/bucklefrog/), a `<canvas>` based Frogger clone, in order to help me explore OCaml's compile-to-js story.

![gameplay](https://raw.githubusercontent.com/FriteGames/buckle-frogger/master/gameplay.gif)

### Researching Frogger

Like most impatient developers, the first thing I did was I dive right into development with absolutely no plan. At the point where I had a sprite that could move via arrow keys, I came to the realization that nothing was feeling quite right. There were many questions I needed to answer in order to be able to create a Frogger clone that felt true. Questions like whether the game runs on a grid or in "continuous" space, how many frames are there in the frog's jump animation. When the frog jumps, does he _slide_ or _teleport_. What is the aspect ratio of the screen? How much space should each lane take up? How does collision detection work? Is the strictness of collision detection different depending on if the frog is colliding with a log, turtle, alligator, car, or the end goals? All of these questions (and more) needed answering. I used many sources to try to piece together everything I could.

#### graphics

The 1981 Arcade version of Frogger ran with raster graphics and resolution of 224 x 256 [^1]. By doing some calculations and also overlaying a ruler onto a screenshot of the game, I was able to determine that the screen is laid out on a grid of 16 rows and 14 columns. From top to bottom the rows get used as follows:

- 1.5 rows for the game score
- 1.5 rows for the end goal
- The next 12 rows are used to represent 1 game lane each.
- The last (and 16th) row holds the life count and countdown timer.

![Screenshot with Ruler](/frogger-ruler.png)

#### mechanics

I found instructions online that go in depth explaining how Frogger gameplay works. One on 20goto0 [^3] and the other from gamefaqs [^4]. In short:

- The first half of the lanes have cars that the frog must avoid. The second half requires the frog to land on the floating logs and turtles. The frog can move while on a log.
- The frog has to land in all five coves in order to advance to the next level.
- In later stages, alligators and snakes are brought which increase the difficulty.

By slowing down videos of Frogger being played, I could tell that the frog doesn't teleport, rather he moves exactly one `tileWidth` per jump and it takes about 100ms. while the game is laid out on a grid, everything within that grid moves continously.

### Development

#### getting started: build system

The first step is getting the whole build pipeline in place. For this I used the standard [bsb](https://bucklescript.github.io/docs/en/new-project.html) setup in order to compile `.ml` files to javascript. From there I can use [parcel](https://parceljs.org/) pointed at my `index.html` file to build the project. Since I used `<canvas>`, there was no need for any third party libs. The compile-refresh cycle was < 100ms which was unspeakably satisfying after spending 2 years in a massive webpack project.

#### setting up the game loop

Every game has a [game loop](https://gameprogrammingpatterns.com/game-loop.html) for continiously processing inputs, updating state, and rerendering the screen. Setting it up in OCaml was pretty similar to how you'd do it in JS

```ocaml
(* for keeping track of how much time elapsed in between frames *)
let lastTime = ref 0;;

(* the gameloop. takes the rendering context and the game state *)
let rec gameloop ctx state =
  (* first calculate elapsed time *)
  let dt = (Js.Date.now ()) -. !lastTime in

  (* render the current state and calculate the next one *)
  (render ctx state);
  let nextState = (updateState state dt) in

  (* record the time and queue the next loop in rAF *)
  lastTime := Js.Date.now ();
  (Webapi.requestAnimationFrame (fun _ -> (gameloop ctx nextWorld )))
;;
```

### handling user input

Frogger uses joystick-style controls. A joystick can only be pressed in a single direction at a time. I mapped the arrow keys into a joystick-style input. Note that it may be pressed either up/down/left/right or not at all, which is why I used the [option](https://caml.inria.fr/pub/docs/manual-ocaml/libref/Option.html) type.

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

### To Be Continued

### sources

[^1]: https://en.wikipedia.org/wiki/Frogger
[^3]: http://www.20goto10.co.uk/frogger/instructions.html
[^4]: https://gamefaqs.gamespot.com/snes/577129-frogger/faqs/7869
