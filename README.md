# @frida/depd

Frida-optimized ESM fork of https://github.com/dougwilson/nodejs-depd.

The real thing relies on V8's structured stack traces, which Frida's QuickJS
runtime doesn't have. This version never emits any deprecation warnings.
