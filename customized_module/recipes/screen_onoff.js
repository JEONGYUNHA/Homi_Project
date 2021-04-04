var recipe = {
  transcriptionHook: {
    "SCREEN_ON": {
      pattern: "일어나",
      command: "SCREENON"
    },
    "SCREEN_OFF": {
      pattern: "잠들어",
      command: "SCREENOFF"
    },
  },
  command: {
    "SCREENON": {
      shellExec: {
        exec: (params, key) => {
          return "~/MagicMirror/modules/MMM-AssistantMk2/scripts/screenon.sh"
          //return "ls -al"
        },
        options: (params, key)=> {
          return ""
        },
      }
    },
    "SCREENOFF": {
      shellExec: {
        exec: "~/MagicMirror/modules/MMM-AssistantMk2/scripts/screenoff.sh",
        options: null,
      }
    },
  }
}

exports.recipe = recipe // Don't remove this line.
