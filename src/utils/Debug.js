import debug from 'debug';

debug.enable('LEMP:*');

export default function Debug(label) {
  return debug(`LEMP:${label}`);
}

window.onerror = (message, url, line) => {
  const error = { message, url, line };
  console.error('Error %o', error);
};
