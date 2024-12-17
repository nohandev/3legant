import './App.css';
import DiscountNotice from './components/DiscountNotice.jsx';
import Navigation from './components/Navigation.jsx';
import IntroductoryAnnouncement from './components/IntroductoryAnnouncement.jsx';
import TrendingBrands from './components/TrendingBrands.jsx';
import NewProducts from './components/NewProducts.jsx';
import FilterByCategory from './components/FilterByCategory.jsx';

function App() {
  return (
    <>
     <DiscountNotice/>
     <Navigation/>
     <IntroductoryAnnouncement/>
     <TrendingBrands/>
     <NewProducts/>
     <FilterByCategory/>
    </>
  )
}

export default App