//Set the perlin noise
let noiseOffsetX = 0;
let noiseOffsetY = 0;
let noiseIncrement = 0.01;

function setup() {
  //Create square canvas
  createCanvas(min(windowWidth, windowHeight), min(windowWidth, windowHeight));
  //Draw the art work
  draw();
}

function draw() {
  //White background
  background(242, 242, 240); 

  //Draw horizaontal yellow line
  let h1 = 18 * height / 800;
  let yellowLines1 = [
    { x: 0, y: 18 * height / 800, w: width, h: h1 },
    { x: 0, y: 127 * height / 800, w: width, h: h1 },
    { x: 0, y: 280 * height / 800, w: width, h: h1 },
    { x: 0, y: 346 * height / 800, w: width, h: h1 },
    { x: 0, y: 450 * height / 800, w: width, h: h1 },
    { x: 0, y: 500 * height / 800, w: width, h: h1 },
    { x: 0, y: 550 * height / 800, w: 65 * width / 800, h: h1 },
    { x: 50 * width / 800, y: 580 * height / 800, w: 430 * width / 800, h: h1 },
    { x: 0, y: 620 * height / 800, w: 65 * width / 800, h: h1 },
    { x: 672 * width / 800, y: 640 * height / 800, w: 115 * width / 800, h: h1 },
    { x: 0, y: 682 * height / 800, w: width, h: h1 },
    { x: 0, y: 708 * height / 800, w: 65 * width / 800, h: h1 },
    { x: 0, y: 756 * height / 800, w: width, h: h1 },
  ];

  //Draw Vertucal yellow line
  let w1 = 18 * width / 800;
  let yellowLines2 = [
    { x: 20 * width / 800, y: 0, w: w1, h: 298 * height / 800 },
    { x: 48 * width / 800, y: 0, w: w1, h: height },
    { x: 92 * width / 800, y: 0, w: w1, h: 774 * height / 800 },
    { x: 180 * width / 800, y: 0, w: w1, h: height },
    { x: 430 * width / 800, y: 0, w: w1, h: height },
    { x: 464 * width / 800, y: 0, w: w1, h: 298 * height / 800 },
    { x: 464 * width / 800, y: 346 * height / 800, w: w1, h: 454 * height / 800 },
    { x: 520 * width / 800, y: 346 * height / 800, w: w1, h: 172 * height / 800 },
    { x: 672 * width / 800, y: 0, w: w1, h: height },
    { x: 703 * width / 800, y: 0, w: w1, h: 298 * height / 800 },
    { x: 738 * width / 800, y: 0, w: w1, h: 364 * height / 800 },
    { x: 738 * width / 800, y: 500 * height / 800, w: w1, h: 156 * height / 800 },
    { x: 769 * width / 800, y: 0, w: w1, h: height },
  ];

  //Draw other yellow part
  let yellowPart = [
    { x: 110 * width / 800, y: 47 * height / 800, w: 70 * width / 800, h: 25 * height / 800 },
    { x: 110 * width / 800, y: 213 * height / 800, w: 70 * width / 800, h: 52 * height / 800 },
    { x: 128 * width / 800, y: 298 * height / 800, w: 36 * width / 800, h: 48 * height / 800 },
    { x: 110 * width / 800, y: 624 * height / 800, w: 70 * width / 800, h: 58 * height / 800 },
    { x: 230 * width / 800, y: 364 * height / 800, w: 53 * width / 800, h: 86 * height / 800 },
    { x: 327 * width / 800, y: 298 * height / 800, w: 54 * width / 800, h: 152 * height / 800 },
    { x: 690 * width / 800, y: 387 * height / 800, w: 79 * width / 800, h: 40 * height / 800 },
    { x: 690 * width / 800, y: 578 * height / 800, w: 79 * width / 800, h: 40 * height / 800 },
  ];

  //Draw other yellow part on the top
  let yellowPart1 = [
    { x: 240 * width / 800, y: 400 * height / 800, w: 33 * width / 800, h: 27 * height / 800 },
    { x: 545 * width / 800, y: 208 * height / 800, w: 37 * width / 800, h: 28 * height / 800 },
  ];

  //Draw red part
  let redPart = [
    { x: 124 * width / 800, y: 36 * height / 800, w: 36 * width / 800, h: 91 * height / 800 },
    { x: 209 * width / 800, y: 36 * height / 800, w: 58 * width / 800, h: 68 * height / 800 },
    { x: 525 * width / 800, y: 186 * height / 800, w: 72 * width / 800, h: 64 * height / 800 },
    { x: 703 * width / 800, y: 164 * height / 800, w: 53 * width / 800, h: 47 * height / 800 },
    { x: 110 * width / 800, y: 395 * height / 800, w: 70 * width / 800, h: 55 * height / 800 },
    { x: 559 * width / 800, y: 364 * height / 800, w: 68 * width / 800, h: 115 * height / 800 },
    { x: 721 * width / 800, y: 387 * height / 800, w: 18 * width / 800, h: 40 * height / 800 },
    { x: 690 * width / 800, y: 604 * height / 800, w: 48 * width / 800, h: 36 * height / 800 },
    { x: 360 * width / 800, y: 756 * height / 800, w: 52 * width / 800, h: 38 * height / 800 },
  ];

  //Draw blue part
  let bluePart = [
    { x: 66 * width / 800, y: 158 * height / 800, w: 44 * width / 800, h: 42 * height / 800 },
    { x: 66 * width / 800, y: 535 * height / 800, w: 44 * width / 800, h: 45 * height / 800 },
    { x: 230 * width / 800, y: 380 * height / 800, w: 53 * width / 800, h: 70 * height / 800 },
    { x: 525 * width / 800, y: 145 * height / 800, w: 72 * width / 800, h: 41 * height / 800 },
    { x: 525 * width / 800, y: 250 * height / 800, w: 72 * width / 800, h: 30 * height / 800 },
    { x: 721 * width / 800, y: 82 * height / 800, w: 48 * width / 800, h: 27 * height / 800 },
    { x: 690 * width / 800, y: 534 * height / 800, w: 48 * width / 800, h: 44 * height / 800 },
  ];

  //Draw grey part
  let greyPart = [
    { x: 92 * width / 800, y: 47 * height / 800, w: 18 * width / 800, h: 25 * height / 800 },
    { x: 124 * width / 800, y: 72 * height / 800, w: 36 * width / 800, h: 19 * height / 800 },
    { x: 209 * width / 800, y: 104 * height / 800, w: 58 * width / 800, h: 23 * height / 800 },
    { x: 222 * width / 800, y: 57 * height / 800, w: 31 * width / 800, h: 29 * height / 800 },
    { x: 124 * width / 800, y: 127 * height / 800, w: 36 * width / 800, h: 18 * height / 800 },
    { x: 92 * width / 800, y: 230 * height / 800, w: 18 * width / 800, h: 35 * height / 800 },
    { x: 133 * width / 800, y: 228 * height / 800, w: 26 * width / 800, h: 22 * height / 800 },
    { x: 92 * width / 800, y: 311 * height / 800, w: 18 * width / 800, h: 35 * height / 800 },
    { x: 136 * width / 800, y: 312 * height / 800, w: 21 * width / 800, h: 19 * height / 800 },
    { x: 250 * width / 800, y: 346 * height / 800, w: 33 * width / 800, h: 25 * height / 800 },
    { x: 327 * width / 800, y: 346 * height / 800, w: 54 * width / 800, h: 18 * height / 800 },
    { x: 327 * width / 800, y: 378 * height / 800, w: 54 * width / 800, h: 43 * height / 800 },
    { x: 343 * width / 800, y: 450 * height / 800, w: 33 * width / 800, h: 18 * height / 800 },
    { x: 573 * width / 800, y: 386 * height / 800, w: 42 * width / 800, h: 35 * height / 800 },
    { x: 578 * width / 800, y: 450 * height / 800, w: 40 * width / 800, h: 18 * height / 800 },
    { x: 559 * width / 800, y: 479 * height / 800, w: 68 * width / 800, h: 21 * height / 800 },
    { x: 137 * width / 800, y: 635 * height / 800, w: 23 * width / 800, h: 20 * height / 800 },
  ]

  //Draw grey squares
  let greySquare = [
    { x: 162 * width / 800, y: 18 * height / 800 },
    { x: 257 * width / 800, y: 18 * height / 800 },
    { x: 412 * width / 800, y: 18 * height / 800 },
    { x: 447 * width / 800, y: 18 * height / 800 },
    { x: 482 * width / 800, y: 18 * height / 800 },
    { x: 585 * width / 800, y: 18 * height / 800 },
    { x: 654 * width / 800, y: 18 * height / 800 },
    { x: 703 * width / 800, y: 18 * height / 800 },
    { x: 751 * width / 800, y: 18 * height / 800 },
    { x: 787 * width / 800, y: 18 * height / 800 },
    { x: 20 * width / 800, y: 36 * height / 800 },
    { x: 48 * width / 800, y: 36 * height / 800 },
    { x: 180 * width / 800, y: 36 * height / 800 },
    { x: 430 * width / 800, y: 36 * height / 800 },
    { x: 464 * width / 800, y: 36 * height / 800 },
    { x: 672 * width / 800, y: 36 * height / 800 },
    { x: 738 * width / 800, y: 36 * height / 800 },
    { x: 48 * width / 800, y: 109 * height / 800 },
    { x: 464 * width / 800, y: 109 * height / 800 },
    { x: 769 * width / 800, y: 109 * height / 800 },
    { x: 703 * width / 800, y: 109 * height / 800 },
    { x: 464 * width / 800, y: 70 * height / 800 },
    { x: 703 * width / 800, y: 50 * height / 800 },
    { x: 738 * width / 800, y: 64 * height / 800 },
    { x: 769 * width / 800, y: 52 * height / 800 },
    { x: 198 * width / 800, y: 127 * height / 800 },
    { x: 283 * width / 800, y: 127 * height / 800 },
    { x: 412 * width / 800, y: 127 * height / 800 },
    { x: 482 * width / 800, y: 127 * height / 800 },
    { x: 590 * width / 800, y: 127 * height / 800 },
    { x: 654 * width / 800, y: 127 * height / 800 },
    { x: 685 * width / 800, y: 127 * height / 800 },
    { x: 756 * width / 800, y: 127 * height / 800 },
    { x: 48 * width / 800, y: 145 * height / 800 },
    { x: 180 * width / 800, y: 145 * height / 800 },
    { x: 464 * width / 800, y: 145 * height / 800 },
    { x: 769 * width / 800, y: 145 * height / 800 },
    { x: 703 * width / 800, y: 146 * height / 800 },
    { x: 738 * width / 800, y: 146 * height / 800 },
    { x: 48 * width / 800, y: 197 * height / 800 },
    { x: 20 * width / 800, y: 262 * height / 800 },
    { x: 180 * width / 800, y: 240 * height / 800 },
    { x: 430 * width / 800, y: 191 * height / 800 },
    { x: 464 * width / 800, y: 199 * height / 800 },
    { x: 464 * width / 800, y: 242 * height / 800 },
    { x: 672 * width / 800, y: 224 * height / 800 },
    { x: 703 * width / 800, y: 211 * height / 800 },
    { x: 738 * width / 800, y: 211 * height / 800 },
    { x: 738 * width / 800, y: 242 * height / 800 },
    { x: 769 * width / 800, y: 195 * height / 800 },
    { x: 92 * width / 800, y: 280 * height / 800 },
    { x: 162 * width / 800, y: 280 * height / 800 },
    { x: 220 * width / 800, y: 280 * height / 800 },
    { x: 738 * width / 800, y: 280 * height / 800 },
    { x: 769 * width / 800, y: 280 * height / 800 },
    { x: 180 * width / 800, y: 298 * height / 800 },
    { x: 430 * width / 800, y: 298 * height / 800 },
    { x: 738 * width / 800, y: 310 * height / 800 },
    { x: 672 * width / 800, y: 328 * height / 800 },
    { x: 769 * width / 800, y: 328 * height / 800 },
    { x: 787 * width / 800, y: 346 * height / 800 },
    { x: 720 * width / 800, y: 346 * height / 800 },
    { x: 555 * width / 800, y: 346 * height / 800 },
    { x: 520 * width / 800, y: 346 * height / 800 },
    { x: 464 * width / 800, y: 346 * height / 800 },
    { x: 430 * width / 800, y: 346 * height / 800 },
    { x: 164 * width / 800, y: 346 * height / 800 },
    { x: 110 * width / 800, y: 346 * height / 800 },
    { x: 32 * width / 800, y: 346 * height / 800 },
    { x: 180 * width / 800, y: 364 * height / 800 },
    { x: 180 * width / 800, y: 364 * height / 800 },
    { x: 180 * width / 800, y: 395 * height / 800 },
    { x: 180 * width / 800, y: 432 * height / 800 },
    { x: 48 * width / 800, y: 432 * height / 800 },
    { x: 520 * width / 800, y: 396 * height / 800 },
    { x: 769 * width / 800, y: 410 * height / 800 },
    { x: 30 * width / 800, y: 450 * height / 800 },
    { x: 222 * width / 800, y: 450 * height / 800 },
    { x: 430 * width / 800, y: 450 * height / 800 },
    { x: 464 * width / 800, y: 450 * height / 800 },
    { x: 751 * width / 800, y: 450 * height / 800 },
    { x: 769 * width / 800, y: 482 * height / 800 },
    { x: 672 * width / 800, y: 482 * height / 800 },
    { x: 35 * width / 800, y: 500 * height / 800 },
    { x: 140 * width / 800, y: 500 * height / 800 },
    { x: 226 * width / 800, y: 500 * height / 800 },
    { x: 430 * width / 800, y: 500 * height / 800 },
    { x: 464 * width / 800, y: 500 * height / 800 },
    { x: 520 * width / 800, y: 500 * height / 800 },
    { x: 751 * width / 800, y: 500 * height / 800 },
    { x: 769 * width / 800, y: 518 * height / 800 },
    { x: 738 * width / 800, y: 518 * height / 800 },
    { x: 672 * width / 800, y: 518 * height / 800 },
    { x: 769 * width / 800, y: 571 * height / 800 },
    { x: 738 * width / 800, y: 561 * height / 800 },
    { x: 738 * width / 800, y: 640 * height / 800 },
    { x: 672 * width / 800, y: 571 * height / 800 },
    { x: 464 * width / 800, y: 547 * height / 800 },
    { x: 464 * width / 800, y: 580 * height / 800 },
    { x: 464 * width / 800, y: 637 * height / 800 },
    { x: 430 * width / 800, y: 580 * height / 800 },
    { x: 430 * width / 800, y: 536 * height / 800 },
    { x: 233 * width / 800, y: 580 * height / 800 },
    { x: 180 * width / 800, y: 540 * height / 800 },
    { x: 180 * width / 800, y: 633 * height / 800 },
    { x: 180 * width / 800, y: 664 * height / 800 },
    { x: 144 * width / 800, y: 580 * height / 800 },
    { x: 92 * width / 800, y: 630 * height / 800 },
    { x: 48 * width / 800, y: 642 * height / 800 },
    { x: 20 * width / 800, y: 682 * height / 800 },
    { x: 162 * width / 800, y: 682 * height / 800 },
    { x: 248 * width / 800, y: 682 * height / 800 },
    { x: 620 * width / 800, y: 682 * height / 800 },
    { x: 769 * width / 800, y: 712 * height / 800 },
    { x: 672 * width / 800, y: 712 * height / 800 },
    { x: 464 * width / 800, y: 700 * height / 800 },
    { x: 430 * width / 800, y: 700 * height / 800 },
    { x: 180 * width / 800, y: 700 * height / 800 },
    { x: 92 * width / 800, y: 700 * height / 800 },
    { x: 48 * width / 800, y: 700 * height / 800 },
    { x: 48 * width / 800, y: 738 * height / 800 },
    { x: 92 * width / 800, y: 738 * height / 800 },
    { x: 180 * width / 800, y: 738 * height / 800 },
    { x: 612 * width / 800, y: 756 * height / 800 },
    { x: 464 * width / 800, y: 756 * height / 800 },
    { x: 430 * width / 800, y: 756 * height / 800 },
    { x: 286 * width / 800, y: 756 * height / 800 },
    { x: 242 * width / 800, y: 756 * height / 800 },
    { x: 30 * width / 800, y: 756 * height / 800 },
    { x: 672 * width / 800, y: 774 * height / 800 },
  ]

  //draw red squares
  let redSquare = [
    { x: 48 * width / 800, y: 0 },
    { x: 180 * width / 800, y: 0 },
    { x: 430 * width / 800, y: 0 },
    { x: 703 * width / 800, y: 0 },
    { x: 769 * width / 800, y: 0 },
    { x: 769 * width / 800, y: 36 * height / 800 },
    { x: 703 * width / 800, y: 79 * height / 800 },
    { x: 769 * width / 800, y: 79 * height / 800 },
    { x: 464 * width / 800, y: 46 * height / 800 },
    { x: 430 * width / 800, y: 87 * height / 800 },
    { x: 20 * width / 800, y: 127 * height / 800 },
    { x: 162 * width / 800, y: 127 * height / 800 },
    { x: 464 * width / 800, y: 127 * height / 800 },
    { x: 720 * width / 800, y: 127 * height / 800 },
    { x: 20 * width / 800, y: 213 * height / 800 },
    { x: 92 * width / 800, y: 213 * height / 800 },
    { x: 180 * width / 800, y: 213 * height / 800 },
    { x: 430 * width / 800, y: 173 * height / 800 },
    { x: 464 * width / 800, y: 177 * height / 800 },
    { x: 672 * width / 800, y: 180 * height / 800 },
    { x: 769 * width / 800, y: 238 * height / 800 },
    { x: 20 * width / 800, y: 280 * height / 800 },
    { x: 110 * width / 800, y: 280 * height / 800 },
    { x: 306 * width / 800, y: 280 * height / 800 },
    { x: 430 * width / 800, y: 280 * height / 800 },
    { x: 520 * width / 800, y: 280 * height / 800 },
    { x: 595 * width / 800, y: 280 * height / 800 },
    { x: 703 * width / 800, y: 280 * height / 800 },
    { x: 14 * width / 800, y: 346 * height / 800 },
    { x: 92 * width / 800, y: 346 * height / 800 },
    { x: 231 * width / 800, y: 346 * height / 800 },
    { x: 309 * width / 800, y: 346 * height / 800 },
    { x: 502 * width / 800, y: 346 * height / 800 },
    { x: 672 * width / 800, y: 346 * height / 800 },
    { x: 738 * width / 800, y: 346 * height / 800 },
    { x: 769 * width / 800, y: 346 * height / 800 },
    { x: 48 * width / 800, y: 400 * height / 800 },
    { x: 430 * width / 800, y: 391 * height / 800 },
    { x: 464 * width / 800, y: 432 * height / 800 },
    { x: 268 * width / 800, y: 450 * height / 800 },
    { x: 323 * width / 800, y: 450 * height / 800 },
    { x: 377 * width / 800, y: 450 * height / 800 },
    { x: 520 * width / 800, y: 450 * height / 800 },
    { x: 672 * width / 800, y: 450 * height / 800 },
    { x: 769 * width / 800, y: 450 * height / 800 },
    { x: 430 * width / 800, y: 482 * height / 800 },
    { x: 520 * width / 800, y: 482 * height / 800 },
    { x: 48 * width / 800, y: 500 * height / 800 },
    { x: 180 * width / 800, y: 500 * height / 800 },
    { x: 330 * width / 800, y: 500 * height / 800 },
    { x: 738 * width / 800, y: 500 * height / 800 },
    { x: 787 * width / 800, y: 500 * height / 800 },
    { x: 48 * width / 800, y: 550 * height / 800 },
    { x: 430 * width / 800, y: 518 * height / 800 },
    { x: 672 * width / 800, y: 557 * height / 800 },
    { x: 769 * width / 800, y: 557 * height / 800 },
    { x: 48 * width / 800, y: 580 * height / 800 },
    { x: 92 * width / 800, y: 580 * height / 800 },
    { x: 343 * width / 800, y: 580 * height / 800 },
    { x: 448 * width / 800, y: 580 * height / 800 },
    { x: 48 * width / 800, y: 624 * height / 800 },
    { x: 92 * width / 800, y: 645 * height / 800 },
    { x: 180 * width / 800, y: 624 * height / 800 },
    { x: 464 * width / 800, y: 619 * height / 800 },
    { x: 430 * width / 800, y: 664 * height / 800 },
    { x: 769 * width / 800, y: 640 * height / 800 },
    { x: 141 * width / 800, y: 682 * height / 800 },
    { x: 343 * width / 800, y: 682 * height / 800 },
    { x: 400 * width / 800, y: 682 * height / 800 },
    { x: 464 * width / 800, y: 682 * height / 800 },
    { x: 538 * width / 800, y: 682 * height / 800 },
    { x: 672 * width / 800, y: 682 * height / 800 },
    { x: 769 * width / 800, y: 682 * height / 800 },
    { x: 24 * width / 800, y: 708 * height / 800 },
    { x: 180 * width / 800, y: 710 * height / 800 },
    { x: 430 * width / 800, y: 738 * height / 800 },
    { x: 48 * width / 800, y: 756 * height / 800 },
    { x: 143 * width / 800, y: 756 * height / 800 },
    { x: 493 * width / 800, y: 756 * height / 800 },
    { x: 715 * width / 800, y: 756 * height / 800 },
    { x: 769 * width / 800, y: 756 * height / 800 },
  ]

  //draw blue squares
  let blueSquare = [
    { x: 20 * width / 800, y: 18 * height / 800 },
    { x: 20 * width / 800, y: 73 * height / 800 },
    { x: 20 * width / 800, y: 168 * height / 800 },
    { x: 20 * width / 800, y: 550 * height / 800 },
    { x: 20 * width / 800, y: 620 * height / 800 },
    { x: 48 * width / 800, y: 682 * height / 800 },
    { x: 48 * width / 800, y: 450 * height / 800 },
    { x: 48 * width / 800, y: 346 * height / 800 },
    { x: 48 * width / 800, y: 280 * height / 800 },
    { x: 92 * width / 800, y: 73 * height / 800 },
    { x: 92 * width / 800, y: 127 * height / 800 },
    { x: 92 * width / 800, y: 262 * height / 800 },
    { x: 92 * width / 800, y: 298 * height / 800 },
    { x: 92 * width / 800, y: 408 * height / 800 },
    { x: 92 * width / 800, y: 450 * height / 800 },
    { x: 92 * width / 800, y: 500 * height / 800 },
    { x: 92 * width / 800, y: 620 * height / 800 },
    { x: 92 * width / 800, y: 682 * height / 800 },
    { x: 92 * width / 800, y: 710 * height / 800 },
    { x: 92 * width / 800, y: 756 * height / 800 },
    { x: 119 * width / 800, y: 18 * height / 800 },
    { x: 180 * width / 800, y: 73 * height / 800 },
    { x: 180 * width / 800, y: 109 * height / 800 },
    { x: 180 * width / 800, y: 170 * height / 800 },
    { x: 180 * width / 800, y: 280 * height / 800 },
    { x: 180 * width / 800, y: 346 * height / 800 },
    { x: 180 * width / 800, y: 450 * height / 800 },
    { x: 180 * width / 800, y: 580 * height / 800 },
    { x: 180 * width / 800, y: 682 * height / 800 },
    { x: 180 * width / 800, y: 756 * height / 800 },
    { x: 238 * width / 800, y: 127 * height / 800 },
    { x: 266 * width / 800, y: 280 * height / 800 },
    { x: 381 * width / 800, y: 280 * height / 800 },
    { x: 381 * width / 800, y: 346 * height / 800 },
    { x: 280 * width / 800, y: 500 * height / 800 },
    { x: 382 * width / 800, y: 500 * height / 800 },
    { x: 297 * width / 800, y: 580 * height / 800 },
    { x: 391 * width / 800, y: 580 * height / 800 },
    { x: 310 * width / 800, y: 682 * height / 800 },
    { x: 370 * width / 800, y: 682 * height / 800 },
    { x: 310 * width / 800, y: 756 * height / 800 },
    { x: 342 * width / 800, y: 756 * height / 800 },
    { x: 430 * width / 800, y: 69 * height / 800 },
    { x: 430 * width / 800, y: 127 * height / 800 },
    { x: 430 * width / 800, y: 243 * height / 800 },
    { x: 430 * width / 800, y: 307 * height / 800 },
    { x: 430 * width / 800, y: 620 * height / 800 },
    { x: 430 * width / 800, y: 682 * height / 800 },
    { x: 464 * width / 800, y: 738 * height / 800 },
    { x: 464 * width / 800, y: 518 * height / 800 },
    { x: 464 * width / 800, y: 391 * height / 800 },
    { x: 464 * width / 800, y: 280 * height / 800 },
    { x: 614 * width / 800, y: 346 * height / 800 },
    { x: 614 * width / 800, y: 450 * height / 800 },
    { x: 614 * width / 800, y: 500 * height / 800 },
    { x: 568 * width / 800, y: 500 * height / 800 },
    { x: 559 * width / 800, y: 450 * height / 800 },
    { x: 499 * width / 800, y: 682 * height / 800 },
    { x: 575 * width / 800, y: 682 * height / 800 },
    { x: 528 * width / 800, y: 756 * height / 800 },
    { x: 568 * width / 800, y: 756 * height / 800 },
    { x: 672 * width / 800, y: 756 * height / 800 },
    { x: 672 * width / 800, y: 640 * height / 800 },
    { x: 672 * width / 800, y: 590 * height / 800 },
    { x: 672 * width / 800, y: 500 * height / 800 },
    { x: 672 * width / 800, y: 396 * height / 800 },
    { x: 672 * width / 800, y: 280 * height / 800 },
    { x: 672 * width / 800, y: 237 * height / 800 },
    { x: 672 * width / 800, y: 127 * height / 800 },
    { x: 672 * width / 800, y: 88 * height / 800 },
    { x: 672 * width / 800, y: 18 * height / 800 },
    { x: 703 * width / 800, y: 36 * height / 800 },
    { x: 703 * width / 800, y: 237 * height / 800 },
    { x: 738 * width / 800, y: 18 * height / 800 },
    { x: 738 * width / 800, y: 450 * height / 800 },
    { x: 738 * width / 800, y: 586 * height / 800 },
    { x: 718 * width / 800, y: 682 * height / 800 },
    { x: 769 * width / 800, y: 588 * height / 800 },
    { x: 769 * width / 800, y: 394 * height / 800 },
    { x: 769 * width / 800, y: 178 * height / 800 },
    { x: 769 * width / 800, y: 127 * height / 800 },
    { x: 756 * width / 800, y: 280 * height / 800 },
  ]

  //draw all parts of the artwork
  drawGraph(yellowLines1, color(234, 212, 51));
  drawGraph(yellowLines2, color(234, 212, 51));
  drawGraph(yellowPart, color(234, 212, 51));
  drawGraph(redPart, color(174, 56, 42));
  drawGraph(bluePart, color(72, 106, 188));
  drawGraph(greyPart, color(217, 216, 212));
  drawSquare(greySquare, color(217, 216, 212));
  drawRedSquare(redSquare);
  drawSquare(blueSquare, color(72, 106, 188));
  drawGraph(yellowPart1, color(234, 212, 51));
}

//Set the function to draw different part
function drawGraph(graphs, col) {
  fill(col);
  noStroke();
  for (let graph of graphs) {
    rect(graph.x, graph.y, graph.w, graph.h);
  }
}

//Set the function to draw different squares
function drawSquare(squares, col) {
  fill(col);
  noStroke();
  for (let square of squares) {
    rect(square.x, square.y, 18 * width / 800, 18 * height / 800);
  }
}

//Set the function to change the color of red squares
function drawRedSquare(squares) {
  for (let i = 0; i < squares.length; i++) {
    let x = squares[i].x;
    let y = squares[i].y;
    let noiseVal = noise(noiseOffsetX + x * noiseIncrement, noiseOffsetY + y * noiseIncrement);
    let colorVal = map(noiseVal, 0, 1, 0, 255);
    fill(255, colorVal, colorVal); 
    rect(x, y, 18 * width / 800, 18 * height / 800);
  }
  noiseOffsetX += noiseIncrement;
  noiseOffsetY += noiseIncrement;
}

//Set the function to resize the canvas with the window
function windowResized() {
  resizeCanvas(min(windowWidth, windowHeight), min(windowWidth, windowHeight));
  draw();
}