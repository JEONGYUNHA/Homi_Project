var recipe = {
  transcriptionHook: {
    "REBOOT": {
      pattern: "재시작 해 줘",
      command: "REBOOT"
    },
  },
  command: {
    "REBOOT": {
      shellExec: {
        exec: "sudo reboot now"
      }
    }
  }
}

exports.recipe = recipe // Don't remove this line.
