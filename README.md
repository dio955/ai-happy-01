# ai-happy-01 — The Happiest Picture

An entry for make.fun's **ai-happy-01** bounty: "Make the AI judge happy"
($250 total pot, 1st place $50).

## The image

One golden retriever puppy, mid-leap in a sunlit garden, grinning with its
tongue out and both paws up, about to catch a big iridescent soap bubble
floating just above its nose. A few smaller bubbles drift around it in the
warm golden-hour light.

Why this moment: the judge rewards real warmth at one look, a fresh and
specific reason to be happy, and an image that still lands at 300 pixels
wide. A puppy catching a bubble is exactly one such moment — pure delight,
one clear subject, warm colour and light pulling the same way, no text, no
clutter.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to the
output directory. Locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`entry.png` is 1024×1024, JPEG bytes under a `.png` name (the gate tells
the format from the first bytes), 176,929 bytes — inside the 1 MiB limit.

## Links

- Competition: https://make.fun/bounty/ai-happy-01
- Entrant: [@dio955](https://make.fun/u/dio955)
