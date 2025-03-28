import ProfileCard from "./ProfileCard"

function App() {

  return (
    <>
      
        <section className="hero is-dark">
          <div className="hero-body">
            <p className="title">Personal Digital Asistents</p>
          </div>
        </section>
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-4">
                <ProfileCard 
                title="Alexa"
                handle="@alexa24"
                image ="https://media.es.wired.com/photos/67bf79bd6a1885df467799ad/1:1/w_900,h_900,c_limit/alexa-logo-1600x900-1.jpg"
                />
                
              </div>
              <div className="column is-4">
                <ProfileCard 
                title="HarryPotter"
                handle="@HarryPotter001"
                image ="https://static.vecteezy.com/system/resources/thumbnails/022/230/278/small/harry-potter-hogwarts-logo-in-cartoon-doodle-style-illustration-isolated-on-white-background-free-vector.jpg"
                />
                
              </div>
              <div className="column is-4">
                <ProfileCard 
                title="Nirvana"
                handle="@Nirvana002"
                image ="https://cdn-images.dzcdn.net/images/cover/7b4b3ccd52e58bec9dc0c8ea1973b177/0x1900-000000-80-0-0.jpg"
                />
                
              </div>
            </div>
          </section>
        </div>
      </>
  )
}

export default App

