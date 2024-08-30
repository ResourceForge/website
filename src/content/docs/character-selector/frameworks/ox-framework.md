---
title: Ox Core
description: Installation and configuration instructions when using the Ox Core framework with character-selector
---

## Installation

- Setup [ox](https://github.com/overextended/ox_core)
- Set the framework in the config file
    - In `sh_config.lua` set `CONFIG.FRAMEWORK` to `FRAMEWORK.OX` or `'ox'`

## Configure max number of characters

:::warning
    Ensure there are enough character peds defined in the configuration when setting max characters, by default a max of `8` characters is supported.
:::

- In `sh_config.lua` the `CONFIG.MAX_CHARACTERS` option **does not apply** to **Ox Core**.
- The max number of characters can be set using the `ox:characterSlots` convar
    - located in your `server.cfg` or `ox.cfg`
    - Set `ox:characterSlots` to a `number` of your choice e.g. `3`

### Example
```
setr ox:characterSlots 3
```