import DOMPurify from 'dompurify';

const SanitizeHTML = ({ html }: { html: string }) => {

  const embedHtml = (htmlStringData) => {
    const oembedRegex = /<oembed[^>]*>/g;
    const oembedMatch = htmlStringData?.match(oembedRegex);

    if (oembedMatch) {
      const oembedUrl = oembedMatch[0].match(/url="([^"]*)"/)[1];
      const iframeElement = `<iframe src="${oembedUrl}" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      htmlStringData = htmlStringData.replace(oembedRegex, iframeElement);
    }
    return htmlStringData;
  }

  const addTargetBlank = (htmlString) => {
    const div = document.createElement('div');
    div.innerHTML = htmlString;

    const anchors = div.querySelectorAll('a');
    anchors.forEach(anchor => {
      anchor.setAttribute('target', '_blank');
      anchor.setAttribute('rel', 'noopener noreferrer');
    });
    return div.innerHTML;
  };
  const config = { ADD_TAGS: ['iframe'], KEEP_CONTENT: false }
  const embededData = embedHtml(html)
  const sanitizedHTML = DOMPurify.sanitize(embededData, config);
  const htmlWithTargets = addTargetBlank(sanitizedHTML);
  return <div dangerouslySetInnerHTML={{ __html: htmlWithTargets }} />;
};

export default SanitizeHTML;
