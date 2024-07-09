import React, { useEffect } from 'react';
import Swiper from 'swiper';


const Our_services = () => {
    useEffect(() => {
        const swiper = new Swiper('.swiper', {
          slidesPerView: 1, // Initially set to 1 for mobile view
          spaceBetween: 10,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            // Responsive breakpoints
            640: {
              slidesPerView: 2, // 2 slides per view for screens >= 640px
            },
            768: {
              slidesPerView: 3, // 3 slides per view for screens >= 768px
            },
            1024: {
              slidesPerView: 4, // 4 slides per view for screens >= 1024px
            },
          },
        });
      }, []);
    

  return (
    <div className=" py-4 px-4 sm:px-8 mt-10 text-white text-lg">
      <div className="flex justify-center items-center">
        <h1 className="text-center text-black text-4xl">Our Services</h1>
      </div>
      <div className="swiper custom-carousel">
        <div className="swiper-wrapper">
          <div className="swiper-slide swiper-slide--one">
            <span className="mb-4">Mustang</span>
            <div>
              <p>
                Explore the ancient kingdom of Mustang, known for its unique culture, dramatic landscapes, and rich history. Trek through arid deserts, visit ancient monasteries, and experience the warmth of the local people.
              </p>
            </div>
          </div>
          <div className="swiper-slide swiper-slide--two">
            <span className="mb-4">Pokhara</span>
            <div>
              <p>
                Enjoy the serene beauty of Phewa Lake, visit the famous World Peace Pagoda, and marvel at the stunning views of the Annapurna Range. Pokhara is a haven for adventure enthusiasts and nature lovers alike.
              </p>
            </div>
          </div>
          <div className="swiper-slide swiper-slide--three">
            <span className="mb-4">Everest Base Camp</span>
            <div>
              <p>
                Experience the adventure of a lifetime by trekking to the base camp of Mount Everest. Walk in the footsteps of legendary climbers and witness breathtaking views of the world's highest peaks.
              </p>
            </div>
          </div>
          <div className="swiper-slide swiper-slide--four">
            <span className="mb-4">Annapurna Base Camp</span>
            <div>
              <p>
                Trek to the heart of the Annapurna Sanctuary, surrounded by towering peaks and pristine nature. Annapurna Base Camp offers a unique blend of spectacular mountain scenery and rich cultural diversity.
              </p>
            </div>
          </div>
          <div className="swiper-slide swiper-slide--five">
            <span className="mb-4">Poon Hill</span>
            <div>
              <p>
                Poon Hill is famous for its panoramic sunrise views over the Annapurna and Dhaulagiri mountain ranges. This relatively short trek offers an unforgettable experience of Nepal's natural beauty.
              </p>
            </div>
          </div>
          <div className="swiper-slide swiper-slide--six">
            <span className="mb-4">Gorkha</span>
            <div>
              <p>
                Visit the historic town of Gorkha, the birthplace of King Prithvi Narayan Shah, who unified Nepal. Explore the ancient Gorkha Palace, the stunning temples, and the beautiful hillside landscapes.
              </p>
            </div>
          </div>
          <div className="swiper-slide swiper-slide--seven">
            <span className="mb-4">Chitwan National Park</span>
            <div>
              <p>
                Discover the diverse wildlife of Chitwan National Park, home to Bengal tigers, one-horned rhinoceroses, and countless bird species. Enjoy jungle safaris, elephant rides, and cultural experiences with the Tharu people.
              </p>
            </div>
          </div>
          <div className="swiper-slide swiper-slide--eight">
            <span className="mb-4">Lumbini</span>
            <div>
              <p>
                Lumbini is the birthplace of Lord Buddha and a UNESCO World Heritage Site. Visit the sacred Mayadevi Temple, the beautiful monastic zones, and the peaceful Lumbini Garden.
              </p>
            </div>
          </div>
          <div className="swiper-slide swiper-slide--nine">
            <span className="mb-4">Langtang Valley</span>
            <div>
              <p>
                Trek through the picturesque Langtang Valley, known for its stunning landscapes, rich Tamang culture, and diverse flora and fauna. Enjoy panoramic mountain views and the hospitality of local communities.
              </p>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Our_services;
