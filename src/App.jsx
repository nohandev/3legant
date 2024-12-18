import './App.css';
import DiscountNotice from './components/DiscountNotice.jsx';
import Navigation from './components/Navigation.jsx';
import IntroductoryAnnouncement from './components/IntroductoryAnnouncement.jsx';
import TrendingBrands from './components/TrendingBrands.jsx';
import NewProducts from './components/NewProducts.jsx';
import FilterByCategory from './components/FilterByCategory.jsx';
import BannerGrid from './components/BannerGrid.jsx';
import BestSeller from './components/BestSeller.jsx';
import MarketingMessage from './components/MarketingMessage.jsx';
import VideoSection from './components/VideoSection.jsx';
import BlogSection from './components/BlogSection.jsx';
import InstagramNewsFeed from './components/InstagramNewsFeed.jsx';

function App() {
  return (
    <>
     <DiscountNotice />
     <Navigation />
     <IntroductoryAnnouncement />
     <TrendingBrands />
     <NewProducts />
     <FilterByCategory />
     <BannerGrid />
     <BestSeller />
     <MarketingMessage />
     <VideoSection />
     <BlogSection />
     <InstagramNewsFeed />
    </>
  )
}

export default App