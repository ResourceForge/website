---
title: QBox
description: Installation and configuration instructions when using the Qbox framework with character-selector
---

## Installation

- Setup [qbox](https://github.com/Qbox-project/qbx_core)
- Enable use of external character system in `qbx_core` config
    - located in `qbx_core/config/client.lua` under `useExternalCharacters`
    - Set `useExternalCharacters` to `true`
- Set the framework in the config file
    - In `sh_config.lua` set `CONFIG.FRAMEWORK` to `FRAMEWORK.QBOX` or `'qbox'`

## Configure max number of characters

:::warning
    Ensure there are enough character peds defined in the configuration when setting max characters, by default a max of `8` characters is supported.
:::

- In `sh_config.lua` the `CONFIG.MAX_CHARACTERS` option **does not apply** to **Qbox**.
- The max number of characters can be set in the `qbx_core` config
    - located in `qbx_core/config/server.lua` under `defaultNumberOfCharacters`
    - Set `defaultNumberOfCharacters` to a `number` of your choice e.g. `3`

### Example

```lua
    characters = {
        playersNumberOfCharacters = { -- Define maximum amount of player characters by rockstar license (you can find this license in your server's database in the player table)
            ['license2:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'] = 5,
        },

        defaultNumberOfCharacters = 3, -- Define maximum amount of default characters (maximum 3 characters defined by default)
    },
```

:::note
    The max characters per player id is also supported using `playersNumberOfCharacters`
:::
