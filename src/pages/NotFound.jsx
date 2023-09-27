import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function NotFound() {
  const [paragraphs, setParagraphs] = useState([]);
  const [loading, setLoading] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    // Load data when the component mounts
    loadMoreParagraphs();
  }, []);

  const loadMoreParagraphs = () => {
    if (loading) return;

    setLoading(true);

    axios.get(`https://api.alquran.cloud/v1/ayah/1/en.asad`)
      .then((response) => {
        const newParagraph = response.data.data.text; // Update this with your API response structure
        setParagraphs((prevParagraphs) => [...prevParagraphs, newParagraph]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  // Calculate the available space on the page
  const availableSpace = window.innerHeight;

  // Add a scroll event listener to trigger loading more data when reaching the bottom of the content
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.addEventListener('scroll', handleScroll);
      return () => {
        contentRef.current.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handleScroll = () => {
    const content = contentRef.current;
    if (content) {
      const scrollPosition = content.scrollTop + availableSpace;
      const totalHeight = content.scrollHeight;

      if (scrollPosition >= totalHeight - 200 && paragraphs.length < 50 && !loading) {
        loadMoreParagraphs();
      }
    }
  };

  return (
    <div ref={contentRef} style={{ height: '100vh', overflowY: 'auto' }}>
      {paragraphs.map((paragraph, index) => (
        <p className='' key={index}>{paragraph}</p>
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default NotFound;
