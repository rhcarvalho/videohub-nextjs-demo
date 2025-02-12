"use client";

import { useRef, useEffect } from "react";

/**
 * VideoHub component that loads and embeds a VideoHub video player.
 *
 * When using the component set `key={id}` with the video ID, to tell React to
 * re-render the component when the video ID changes.
 *
 * @param {Object} props - The component props.
 * @param {string} props.domain - The domain from which to load the VideoHub script.
 * @param {string} props.id - The ID of the video to embed.
 *
 * @returns {JSX.Element} The VideoHub component.
 */
export function VideoHub({ domain, id }) {
  if (!/^[a-z0-9-]+(\.[a-z0-9-]+)+$/.test(domain) || !/^[a-z0-9-]+$/.test(id)) {
    return (
      <div className="text-sm text-red-700">
        Invalid VideoHub domain or video ID.
      </div>
    );
  }

  const containerRef = useRef(null);
  const videohubRef = useRef(null);

  useEffect(() => {
    if (videohubRef.current !== null) {
      // During development, React runs setup and cleanup one extra time before
      // the actual setup. This is a stress-test that verifies your Effect’s
      // logic is implemented correctly.
      //
      // We return early to avoid loading the VideoHub script twice.
      //
      // See https://react.dev/reference/react/useEffect#my-effect-runs-twice-when-the-component-mounts.
      console.log("VideoHub already loaded", domain, id);
      return;
    }
    console.log("VideoHub", domain, id);

    // Create a new <script> element to load the VideoHub embed.js script. The
    // script matches exactly the one provided by the VideoHub platform when
    // copying the embed code of a given video.
    const script = document.createElement("script");
    script.type = "module";
    // The `now` parameter serves to force the browser to reload the script,
    // because otherwise modules are only executed once, even if they have been
    // referenced in multiple <script> tags.
    //
    // It is not part of the VideoHub embed code, but it is a useful trick to
    // use in Single Page Applications (SPAs) to ensure the script is reloaded
    // when the component is mounted again.
    //
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#:~:text=Modules%20are%20only%20executed%20once%2C%20even%20if%20they%20have%20been%20referenced%20in%20multiple%20%3Cscript%3E%20tags.
    script.src = `https://${domain}/embed.js?now=${Date.now()}`;
    script.dataset.videohubId = id;
    videohubRef.current = script;
    containerRef.current.appendChild(script);
    return () => {
      // A return value with a cleanup function is not needed because the
      // side-effects of VideoHub's embed.js script are self-contained in the
      // DOM container node. After the VideoHub React component is removed from
      // the tree, the DOM node and all of its children will be automatically
      // garbage-collected by the browser JavaScript engine.
      //
      // See https://react.dev/reference/react/useEffect#controlling-a-non-react-widget.
      console.log("VideoHub removed", domain, id);
    };
  }, [domain, id]);

  return (
    <div ref={containerRef} className="max-w-[1280px] text-sm text-neutral-700">
      Video Container
    </div>
  );
}

/**
 * VideoHubMeta component renders metadata in JSON format to be consumed by the
 * VideoHub embed player.
 *
 * @param {Object} props - The component props.
 * @param {string} props.userId - The ID of the user. Setting this value will
 * enable features such as "continue from where you left off".
 * @returns {JSX.Element|null}
 */
export function VideoHubMeta({ userId }) {
  if (!userId) {
    return null;
  }
  // Convert the user ID to string (could also be a unique stable hash of the
  // user ID).
  userId = userId.toString();
  return (
    <script data-videohub="metadata" type="application/json">
      {JSON.stringify({ userId })}
    </script>
  );
}
