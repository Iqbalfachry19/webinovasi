import React from "react";

const SocialIcons: React.FC = () => {
  return (
    <div className="flex justify-center space-x-4">
      {/* Facebook Icon */}
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800"
        aria-label="Facebook"
      >
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22 12.07c0-5.5-4.5-10-10-10S2 6.57 2 12.07c0 5.1 3.8 9.4 8.8 10.1v-7.1H7.9v-3h2.9v-2.3c0-2.9 1.6-4.6 4.4-4.6 1.3 0 2.7.2 2.7.2v2.8h-1.5c-1.5 0-2 .9-2 1.9v2.1h3.4l-.5 3h-2.9v7.1c5.1-.7 8.8-5 8.8-10.1z" />
        </svg>
      </a>

      {/* Twitter Icon */}
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-600"
        aria-label="Twitter"
      >
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.46 6.003c-.773.344-1.605.576-2.48.678a4.328 4.328 0 0 0 1.896-2.379 8.632 8.632 0 0 1-2.758 1.052A4.295 4.295 0 0 0 15.17 5c-2.373 0-4.3 1.929-4.3 4.305 0 .338.038.668.11.986-3.574-.179-6.75-1.888-8.876-4.486a4.306 4.306 0 0 0-.581 2.165c0 1.497.762 2.82 1.918 3.594a4.291 4.291 0 0 1-1.945-.538v.054c0 2.083 1.48 3.81 3.448 4.205a4.314 4.314 0 0 1-1.934.073c.547 1.72 2.12 2.97 3.987 3.003a8.643 8.643 0 0 1-5.352 1.849c-.348 0-.688-.021-1.027-.061a12.217 12.217 0 0 0 6.62 1.939c7.944 0 12.295-6.558 12.295-12.25 0-.187-.004-.374-.011-.559a8.749 8.749 0 0 0 2.162-2.231z" />
        </svg>
      </a>

      {/* YouTube Icon */}
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 hover:text-red-800"
        aria-label="YouTube"
      >
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M23.49 6.57c-.18-.65-.72-1.12-1.38-1.23-1.55-.35-7.77-.35-7.77-.35s-6.22 0-7.77.35c-.66.11-1.2.58-1.38 1.23-.29 1.06-.29 3.21-.29 3.21s0 2.16.29 3.21c.18.65.72 1.12 1.38 1.23 1.55.35 7.77.35 7.77.35s6.22 0 7.77-.35c.66-.11 1.2-.58 1.38-1.23.29-1.06.29-3.21.29-3.21s0-2.16-.29-3.21zM9.54 15.35V8.65l6.76 3.35-6.76 3.35z" />
        </svg>
      </a>
    </div>
  );
};

export default SocialIcons;
