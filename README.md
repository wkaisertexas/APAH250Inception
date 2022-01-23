# AP Art History (APAH) 250 Inception
So, AP Art History is a class that I really enjoyed my Junior year of high school, giving me a perspective for art, despite taking a pretty fat L on the AP test.

So, I wanted to be able to AP Art History efy any image that I wanted to. More than that though, I wanted to be able to 

## How it works

The library that just made this a breeze was [Node Mosaic Generator](https://github.com/Dellos7/mosaic-node-generator).

A simple web-scraper that I wrote got all of the AP Art History images (and their descriptions) from Smart History's [website] (https://smarthistory.org/required-works-for-ap/).

Then it is just a matter of compute time.

# How to run

Install mosaic-node-generator

Using **npm**:
```
npm install mosaic-node-generator --save
```

While you are at it, install some dom-manipulation dependencies.
```
npm install fs got jsdom
```

Run index.js, and give it quite a while

```
node index.js
```

It will first download all of the images (fast), and then it will convert all of the images into mosaics made out of AP Art History Pieces.


## Gallery

Here are a couple of my favorite results from this process.

## Final Note
You best believe that I made this an NFT collection for some reason. This may be copyright infringement, but I think turning images into mosaics of themselves could very well count under the somewhat loose definition as being "transformative".
