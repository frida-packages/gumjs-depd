export default function depd(namespace) {
  function deprecate(message) {
  }

  deprecate.function = wrapfunction;
  deprecate.property = wrapproperty;

  return deprecate;
}

function wrapfunction(fn, message) {
  return fn;
}

function wrapproperty(obj, prop, message) {
}
