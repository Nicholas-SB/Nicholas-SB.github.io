# mochi / nic

personal corner of the internet. links, pfps, vibes.
nothing serious, just a place to exist online.

---

<details>
<summary>cheatsheet (for me)</summary>

## File structure

```
yourusername.github.io/
├── index.html       ← the whole page lives here
├── pfps.js          ← list of pfp filenames (edit this to add new ones)
└── pfp/
    ├── pfp1.png
    ├── pfp2.jpg
    └── ...          ← drop new pfp images here
```

## How to update things

### Add a new pfp
1. Drop the image file into the `/pfp/` folder
2. Open `pfps.js` and add the filename to the list:
   ```js
   "pfp/yournewpfp.png",
   ```
3. Push to GitHub — done.

### Update links
All links have comments in `index.html` that say exactly where to paste your URL.
Search for `YOUR_` in the file to find all the placeholders.

### Change the Discord username
In `index.html`, find `YOUR_DISCORD_USERNAME` and replace it.
The copy button will automatically copy whatever text is there.

</details>
