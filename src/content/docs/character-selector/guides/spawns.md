---
title: Change where new players spawn
description: todo
---

## Locations

The individual spawn locations can be changed in the config file `sh_config.lua` under `CONFIG.SPAWNS`

<div align="center">
  <img src="/src/assets/thumbnail_helper_numbered.png" alt="alt"/>
  <br>
  Highlighted spawn selection
</div>

‎

```lua
---@type vector4[]
CONFIG.SPAWNS = {
    vector4(0.0, 0.0, 0.0, 0.0), -- 0
    vector4(0.0, 0.0, 0.0, 0.0), -- 1
    vector4(0.0, 0.0, 0.0, 0.0), -- 2
    vector4(0.0, 0.0, 0.0, 0.0), -- 3
    vector4(0.0, 0.0, 0.0, 0.0), -- 4
    vector4(0.0, 0.0, 0.0, 0.0), -- 5
};
```

- Contains the positions for each spawn choice when a new character is created.
- Max of 6 spawns are available
- The first 3 spawns match up with the top row of thumbnails and the remaining 3 are for the bottom row of thumbnails

## Thumbnails

| ![alt-1](/src/assets/thumbnail_helper_normal.png "title-1")      | ![alt-2](/src/assets/thumbnail_helper_highlighted.png "title-2") |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Normal view                                                             |                                                                         |

The image name pattern for thumbnails is `thumbnail-[number]` and requires the `webp` format.

Different sized thumbnails are used based on player monitor resolutions, to improve performance when loading the images. When swapping out a thumbnail you also need to create multiple clones at specific sizes shown below.

| Target      | Directory         | Size     |
| ----------- | ----------------- | -------- |
| Placeholder | placeholders      | 48x27    |
| 600p        | 800               | 208x117  |
| 720p        | 1280              | 336x189  |
| 1080p       | 1920              | 496x279  |
| 2k          | 2560              | 688x387  |
| 4k          | 3840              | 1024x576 |

- Target aspect ratio is `16:9`