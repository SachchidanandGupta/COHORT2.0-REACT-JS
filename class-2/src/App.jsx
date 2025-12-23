import React from 'react'
import Card from './components/Card'

const App = () => {
  const users = [
  {
    profileImg: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=300",
    backgroundImg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    userName: "alex_jordan",
    description: "Passionate traveler capturing moments through creative photography",
    likeCount: 1240,
    viewsCount: 18900,
    postCount: 86
  },
  {
    profileImg: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300",
    backgroundImg: "https://images.unsplash.com/photo-1503264116251-35a269479413?w=1200",
    userName: "sarah_miles",
    description: "Digital artist sharing colorful designs and visual stories",
    likeCount: 980,
    viewsCount: 14320,
    postCount: 54
  },
  {
    profileImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300",
    backgroundImg: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200",
    userName: "kevin_lee",
    description: "Fitness enthusiast documenting workouts progress and healthy lifestyle",
    likeCount: 2100,
    viewsCount: 27600,
    postCount: 132
  },
  {
    profileImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300",
    backgroundImg: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200",
    userName: "mark_dev",
    description: "Frontend developer building modern interfaces with clean code",
    likeCount: 760,
    viewsCount: 9800,
    postCount: 41
  },
  {
    profileImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300",
    backgroundImg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
    userName: "emma_writes",
    description: "Writer sharing thoughts poetry and short daily reflections",
    likeCount: 1560,
    viewsCount: 20100,
    postCount: 98
  },
  {
    profileImg: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300",
    backgroundImg: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200",
    userName: "luna_travel",
    description: "Solo traveler exploring cultures cuisines and hidden destinations",
    likeCount: 2340,
    viewsCount: 32500,
    postCount: 120
  },
  {
    profileImg: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=300",
    backgroundImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
    userName: "mia_foodie",
    description: "Food lover reviewing recipes cafes and homemade dishes",
    likeCount: 1720,
    viewsCount: 22900,
    postCount: 65
  },
  {
    profileImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
    backgroundImg: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1200",
    userName: "oliver_music",
    description: "Indie musician sharing demos lyrics and studio sessions",
    likeCount: 890,
    viewsCount: 13400,
    postCount: 49
  }

];

  return (
    <div className='h-vh bg-black text-white flex justify-center items-center flex-wrap p-3 gap-4'>
       {users.map(function(elem,index){
        return <Card  key={index} user={elem}/>
       })}
    </div>
  )
}

export default App
