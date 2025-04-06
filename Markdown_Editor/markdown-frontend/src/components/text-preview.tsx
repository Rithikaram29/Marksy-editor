import debounce from "lodash.debounce";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "../styling/htmlPreview.css";
import Loader from "../utils/loader";
// import Prism from "prismjs";
// import "prismjs/themes/prism.css";
// import "prismjs/components/prism-javascript";
// import "prismjs/components/prism-markdown";

interface MarkdownResponse {
  data: string;
  status: "SUCCESS" | "ERROR";
  msd: string;
}

const TextConverter = () => {
  const [markdownText, setMarkdownText] = useState<string>("");
  const [html, setHtml] = useState<string>("");
  const [isLoading, setLoading] = useState(false);

  const convertMarkdown = async (markdown: string) => {
    try {
        if(markdownText.trim() !== ""){
      const response = await axios.post<MarkdownResponse>(
        `http://localhost:7231/api/markdown`,
        { markdown },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.status === "SUCCESS") {
        setHtml(response.data.data);
      } else {
        console.error("Conversion failed", response.data.msd);
      }
      setLoading(false);
    }else{
        setLoading(false);
    }
    } catch (error) {
      console.error("Request failed", error);
      setLoading(false);
    }

   
  };

  const handleDebounce = useCallback(
    debounce((value: string) => {
      setMarkdownText(value);
      setLoading(true);
    }, 900),
    []
  );

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleDebounce(e.target.value);
  };

  useEffect(() => {
    if (markdownText.trim()) {
      convertMarkdown(markdownText);
    } else {
      setHtml("");
      setLoading(false);
    }
  }, [markdownText]);

  return (
    <div className="h-screen w-full flex p-5 gap-4">
      <textarea
        placeholder="Write markdown here..."
        className="bg-white border-gray-500 border-2 p-2 rounded-lg h-full w-1/2 resize-none"
        onChange={handleTextChange}
      />

      <div className="preview border-gray-500 bg-white border-2 rounded-lg h-full w-1/2 p-4 overflow-auto">
        {isLoading ? (
          <Loader />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        )}
      </div>
    </div>
  );
};

export default TextConverter;
