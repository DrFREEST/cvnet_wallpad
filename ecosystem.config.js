module.exports = {
  apps : [
    {
      name : "Cvnet SmartHome",
      script : "entry.js",
      env : {
        NODE_ENV : "development"
      },
      env_production : {
        NDE_ENV : "production"
      },
      instances : 1,
      exec_mode : "fork"
    }
  ]
}
