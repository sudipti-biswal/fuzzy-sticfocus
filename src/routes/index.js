import Signup from '../screens/auth/Signup';
import Login from '../screens/auth/Login';
import VerifyEmail from '../screens/auth/VerifyEmail';
import EmailVerified from '../screens/auth/EmailVerified';
import ForgotPassword from '../screens/auth/ForgotPassword';
import SelectCategories from '../screens/auth/SelectCategories';
import PostDetail from '../screens/protected/PostDetail';

// import Protected Pages
import TrendingPage from '../screens/protected/Trending';
import ForYou from '../screens/protected/ForYou';
import Followings from '../screens/protected/Followings';
import CreatePost from '../screens/protected/CreatePost';
import Chat from '../screens/protected/Chat';
import Profile from '../screens/protected/Profile';
import EditProfile from '../screens/protected/Profile/EditProfile';
import search from '../screens/protected/Search/search';
import authorProfile from '../screens/protected/AuthorProfile/profile';

// Importing Common Pages
import Home from '../screens/protected/Home';
import Category from '../screens/protected/Category';
import Upload_Video from '../screens/protected/Upload_Video';
import Sidebar from '../components/Sidebar/Sidebar';
import Author from '../screens/protected/Author';

import Course1 from '../screens/protected/course/Course1';
import Enroll from '../screens/protected/Enroll/Enroll';
import Checkout from '../screens/protected/Checkout';
import Comments from '../screens/protected/Comments';

import trending from '../screens/protected/Trending';

import course from '../screens/protected/course/Course1';
import enroll from '../screens/protected/Enroll/Enroll';
import crs from '../screens/protected/create-section1';

import checkout from '../screens/protected/Checkout';
import createcourse from '../screens/protected/CreateCourse/createcourse';
import shoppingcart from '../screens/protected/Purchase/shoppingCart';
import instructor from '../screens/protected/course';

export const authRoutes = [
  {
    id: 1,
    path: '/signup',
    component: Signup,
  },
  {
    id: 2,
    path: '/login',
    component: Login,
  },
  {
    id: 3,
    path: '/verify-email',
    component: VerifyEmail,
  },
  {
    id: 4,
    path: '/email-verification/:verificationToken',
    component: EmailVerified,
  },
  {
    id: 5,
    path: '/forgot-password',
    component: ForgotPassword,
  },
  {
    id: 6,
    path: '/select-intrested-categories',
    component: SelectCategories,
  },
];

export const protectedRoutes = [
  {
    id: 1,
    path: '/for-you',
    component: ForYou,
  },
  {
    id: 2,
    path: '/followings',
    component: Followings,
  },
  {
    id: 3,
    path: '/trending',
    component: TrendingPage,
  },
  {
    id: 4,
    path: '/create-post',
    component: CreatePost,
  },
  {
    id: 5,
    path: '/chat',
    component: Chat,
  },
  {
    id: 6,
    path: '/profile',
    component: Profile,
  },
  {
    id: 7,
    path: '/category',
    component: Category,
  },

  {
    id: 8,
    path: '/author',
    component: Author,
  },

  {
    id: 9,
    path: '/course1',
    component: Course1,
  },

  {
    id: 10,
    path: '/Enroll',
    component: Enroll,
  },

  {
    id: 11,
    path: '/search/:searchTerm',
    component: search,
  },

  {
    id: 11,
    path: '/trendings',
    component: trending,
  },

  {
    id: 12,
    path: '/authorpro/:id',
    component: authorProfile,
  },
  {
    id: 13,
    path: '/video-solo/:id',
    component: PostDetail,
  },
  {
    id: 14,
    path: '/EditProfile',
    component: EditProfile,
  },
];