import { SITE_URL, BUSINESS } from './site-config.js';

export function makeShareData(pathname, page) {
  const title = page?.title || BUSINESS.name;
  const url = page?.canonical || new URL(pathname.startsWith('/') && !pathname.startsWith('//') ? pathname : '/', SITE_URL).href;
  const ogAsset = new URL(page?.ogImage || BUSINESS.defaultImage, SITE_URL);
  const image = ogAsset.href;
  const previewImage = ogAsset.origin === SITE_URL ? ogAsset.pathname + ogAsset.search : image;
  const recommendation = 'Confira esta página da ' + BUSINESS.name + ':\n' + title + '\n' + url;
  const params = (values) => new URLSearchParams(values).toString();
  const withUrl = title + '\n' + url;
  const links = [
    ['WhatsApp', 'https://wa.me/?' + params({ text: withUrl })],
    ['Facebook', 'https://www.facebook.com/sharer/sharer.php?' + params({ u: url })],
    ['X / Twitter', 'https://twitter.com/intent/tweet?' + params({ url, text: title })],
    ['Pinterest', 'https://pinterest.com/pin/create/button/?' + params({ url, media: image, description: title })],
    ['LinkedIn', 'https://www.linkedin.com/sharing/share-offsite/?' + params({ url })],
    ['Threads', 'https://www.threads.com/intent/post?' + params({ text: withUrl })],
  ];
  return {title, url, image, previewImage, recommendation, links};
}
