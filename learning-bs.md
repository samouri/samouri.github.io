# Learning Bucklescript

Ever since taking [CMSC330](https://www.cs.umd.edu/class/spring2017/cmsc330/syllabus.shtml) at University of Maryland, I've been enamored with functional programming and the benefits that a type system like OCaml's has to offer. When writing Java programs, I'm always surprised if my code runs without an NPE, while when I was writing OCaml, if my code compiled the norm was for it to run flawlessly.

All that said, I had never written anything complex in OCaml whereas I regularly try to solve real and challenging problems in Java and JavaScript.  I strongly believe that the best way to learn anything is by tackling fun projects, so to that end, here we go!



## Project 1: BuckleFrog

**summary**

Implement retro style Frogger.  I was able to find good [instructions](http://www.20goto10.co.uk/frogger/instructions.html) online as well as a [spritesheet](https://samouri.github.io/bucklefrog/frogger_sprites.ae354d37.png) which covered the graphics I would need.

**getting started: build system**

The first step is getting the whole build pipeline in place.  For this I used the standard [bsb](https://bucklescript.github.io/docs/en/new-project.html) setup in order to compile `.ml` files to javascript. From there I can use [parcel](https://parceljs.org/) pointed at my `index.html` file to build the project.  Since we are using Canvas, there is no need for any third party libs. I was really happy with this setup since every single save takes less than 100ms to compile.

**setting up the game loop**

```ocaml
(* load is very simple and just finds the canvas on the page,
   grabs the 2d context, and then initiates the gameloop
 *)
let load _ =
  let canvas_id = "canvas" in
  let canvas =
    match document |> (Document.getElementById "canvas") with
    | None  ->
      (print_endline ("cant find canvas " ^ (canvas_id ^ " \n"));
       failwith "fail")
    | Some el -> el in
  let context = CanvasRe.CanvasElement.getContext2d canvas in
  (update context startWorld);
;;

(* call the load function when the page is ready *)
let _ = Window.setOnLoad window load

(* update step, takes the rendering context and the world (game state) *)
let rec update ctx world = 
  (* first calc how much time has passed since the last frame *)
  let now = Js.Date.now () in
  let dt = now -. !lastTime in
  
  (* render all sprites to the canvas *)
  (render ctx world);
  
  (* set up the lastTime and queue the next update loop *)
  lastTime := Js.Date.now ();
  (Webapi.requestAnimationFrame (fun _ -> (update ctx world )))
;;

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
  (update context startWorld);
;;
```

**architecture**

1. initialize game loop
2. setup model of game world. disconnected from all visuals

model:

12 x 14