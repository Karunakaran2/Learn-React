import { useState } from 'react';
import { PlayCircle, Image as ImageIcon } from 'lucide-react';

export function Gallery() {
  const [activeTab, setActiveTab] = useState('photos');

  const photos = [
    { id: 1, src: 'https://placehold.co/600x400/0d294d/ffffff?text=BoT+Meeting+2026', alt: 'BoT Meeting 2026', caption: '108th Board of Trustees Meeting' },
    { id: 2, src: 'https://placehold.co/600x400/d19a22/ffffff?text=Seafarers+Day', alt: 'Seafarers Day Celebration', caption: 'National Maritime Day Celebrations' },
    { id: 3, src: 'https://placehold.co/600x400/0d294d/ffffff?text=New+Office+Inauguration', alt: 'New Office Inauguration', caption: 'Inauguration of New SPFO Wing' },
    { id: 4, src: 'https://placehold.co/600x400/d19a22/ffffff?text=Awareness+Camp', alt: 'Awareness Camp', caption: 'Digital Services Awareness Camp in Kochi' },
  ];

  const videos = [
    { id: 1, thumb: 'https://placehold.co/600x400/4b5563/ffffff?text=How+to+Register', caption: 'Tutorial: How to Register on SPFO Portal' },
    { id: 2, thumb: 'https://placehold.co/600x400/4b5563/ffffff?text=Claim+Process', caption: 'Guide: Online Provident Fund Claim Process' },
  ];

  return (
    <div className="gallery-page page-enter">
      <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-border-color">Gallery & Media</h2>

      <div className="flex gap-4 mb-8">
        <button 
          className={`btn ${activeTab === 'photos' ? 'btn-primary' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setActiveTab('photos')}
        >
          <ImageIcon size={18} className="mr-2"/> Photo Gallery
        </button>
        <button 
          className={`btn ${activeTab === 'videos' ? 'btn-secondary' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setActiveTab('videos')}
        >
          <PlayCircle size={18} className="mr-2"/> Video Gallery
        </button>
      </div>

      {activeTab === 'photos' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map(photo => (
            <div key={photo.id} className="glass-panel overflow-hidden group">
              <div className="relative overflow-hidden aspect-video">
                <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
              </div>
              <div className="p-4 bg-white">
                <p className="font-medium text-gray-800 text-center">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'videos' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map(video => (
            <div key={video.id} className="glass-panel overflow-hidden group cursor-pointer hover:shadow-lg transition">
              <div className="relative aspect-video flex items-center justify-center">
                <img src={video.thumb} alt={video.caption} className="w-full h-full object-cover absolute inset-0 opacity-80" />
                <div className="relative z-10 w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center text-white group-hover:bg-secondary transition">
                  <PlayCircle size={32} />
                </div>
              </div>
              <div className="p-4 bg-white text-center">
                <p className="font-bold text-gray-800">{video.caption}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
