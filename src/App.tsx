import React from 'react';
import {
  Youtube,
  ShoppingCart,
  Shield,
  TrendingUp,
  Bot,
  Search,
  Palette,
  Video,
  Megaphone,
  Facebook
} from 'lucide-react';

interface CourseButton {
  title: string;
  icon: React.ReactNode;
  courseLink: string;
}

const courseButtons: CourseButton[] = [
  {
    title: "YouTube Automation",
    icon: <Youtube className="w-6 h-6" />,
    courseLink: "https://drive.google.com/open?id=1KUDqQ8Mn5fHBqjGM3zKHTl_eY58mvqf1"
  },
  {
    title: "Dropshipping",
    icon: <ShoppingCart className="w-6 h-6" />,
    courseLink: "https://mega.nz/folder/CoElRZ7D#gkecFw7X0nTKXHItkn-Wrg"
  },
  {
    title: "Cyber Security",
    icon: <Shield className="w-6 h-6" />,
    courseLink: "https://mega.nz/folder/UDVjTLKK#cZyQEe7g-20OQEM91i83hQ/folder/lCU1XRSK"
  },
  {
    title: "Trading",
    icon: <TrendingUp className="w-6 h-6" />,
    courseLink: "https://mega.nz/folder/sE5XmSKR#bhnkHPjA8B2CIMLMqhoYXQ"
  },
  {
    title: "AI Templates",
    icon: <Bot className="w-6 h-6" />,
    courseLink: "https://drive.google.com/drive/folders/10DntMT4Ccntzo_Y_UWUoVaPer3GuN3CF"
  },
  {
    title: "SEO Course",
    icon: <Search className="w-6 h-6" />,
    courseLink: "https://drive.google.com/drive/folders/1BIsi75id7pTLQmubMmemEFPLMkEWTB6b"
  },
  {
    title: "Graphic Design",
    icon: <Palette className="w-6 h-6" />,
    courseLink: "https://mega.nz/folder/eoxnWRAS#ITKK9j9I5pLdHbFTzhHTgg"
  },
  {
    title: "TikTok Mastery",
    icon: <Video className="w-6 h-6" />,
    courseLink: "https://drive.google.com/drive/folders/1c7l54-LsWRJgnfskvIO75ekI-oL_qUu3"
  },
  {
    title: "SMMA Course",
    icon: <Megaphone className="w-6 h-6" />,
    courseLink: "https://mega.nz/folder/GIlXgaja#pcMh-zp3LgsE9MEJuD3eig"
  },
  {
    title: "Facebook Ads",
    icon: <Facebook className="w-6 h-6" />,
    courseLink: "https://drive.google.com/drive/folders/1ENMWsn4ckwuJV41RQZWxR9MK7Y6NGq79"
  }
];

const App = () => {
  const handleClick = (link: string) => {
    window.open('https://otieu.com/4/8782324', '_blank'); // Affiliate
    window.location.href = link; // Course
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white px-6 py-10 font-sans">
      <h1 className="text-3xl font-bold text-center mb-20 text-green-400">@DailyCourses4U</h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {courseButtons.map((course, i) => (
          <div
            key={i}
            onClick={() => handleClick(course.courseLink)}
            className="flex flex-col items-center text-center cursor-pointer group"
          >
            {/* Folder Body */}
            <div className="w-24 h-20 bg-green-300 rounded-b-md shadow-md relative group-hover:brightness-95 transition">
              {/* Folder Tab */}
              <div className="absolute -top-2 left-2 w-10 h-3 bg-green-400 rounded-sm"></div>

              {/* Icon */}
              <div className="absolute inset-0 flex justify-center items-center text-gray-800">
                {course.icon}
              </div>
            </div>

            {/* Folder Title */}
            <span className="text-xl font-bold mt-2 text-gray-300 group-hover:text-white truncate w-full">
              {course.title}
            </span>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default App;
