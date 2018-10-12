import React from 'react'
import TalkHero from '../components/TalkHero';
import Journey from '../components/Journey';
import TalkSection from '../components/TalkSection';
import './talks.css'

const TalksPage = () => {
  return (
    <div>
        <TalkHero />
        <Journey
          image={require('../images/wallpaper-road.jpg')}
          title="Speaker Journey"
          text="I started my speaking journey in 2013. My first talk was about RaspberryPi in a meetup happened at ThoughtWorks. 
          From that moment, tech speaking has never ceased to fascinate me. 
          I always think it as a way of giving something back to the community by sharing what I learn.
          I have given 20+ talks in monthly local meetups and a bunch of talks in conferences that happen yearly. 
          While I don't have the contents of most of my old talks, below are the slides and videos for few of my recent talks." 
          animate="false" />

        <div className="Talks">
          <TalkSection 
          title="concurrency vs parallelism" 
          abstract="The journey towards becoming a better developer involves in more than just coding. Empathy is the most important skill that any developer should practice. In this talk we will see as a developer how to write code empathetically and how empathy will help you to become a better software craftsman. By the end of the talk, audience will know how to practice empathy, build great softwares and great teams empathetically."
          events="Pycon Singapore 2018"
          video={[<iframe width="730" height="411" src="https://www.youtube.com/embed/HNjAgkybAdQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>]}
          slides={[<script async class="speakerdeck-embed" data-id="ec51301a93864f8b8e5cbd2cc73c8ef6" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>]}
          code="https://github.com/DudeWhoCode/talks/tree/master/concurrency_vs_parallelism"
          />

          <TalkSection 
          title="Empathy maketh an engineer" 
          abstract="Serverless architectures has been around for past few years and there has been quite a few skepticism surrounding it. Few might argue that it’s just another buzzword for marketing. But serverless architectures offer more than a catchy buzzword. In this talk we will discuss, what is serverless, when to and when not to use them and how can we use Amazon Web Services to implement a real-time, production grade serverless logging pipeline. By the end of the talk, audience will get an introduction to serverless and also get to know how to design, deploy and scale logging infrastructures using the same."
          events="DevConf India 2018"
          // video={[<iframe width="730" height="411" src="https://www.youtube.com/embed/HNjAgkybAdQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>]}
          slides={[<script async class="speakerdeck-embed" data-id="8e55a8bd392047f581fdd3816ab72a06" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>]}
          />

          <TalkSection 
          title="Building and Scaling a serverless logging platform" 
          abstract="Serverless architectures has been around for past few years and there has been quite a few skepticism surrounding it. Few might argue that it’s just another buzzword for marketing. But serverless architectures offer more than a catchy buzzword. In this talk we will discuss, what is serverless, when to and when not to use them and how can we use Amazon Web Services to implement a real-time, production grade serverless logging pipeline. By the end of the talk, audience will get an introduction to serverless and also get to know how to design, deploy and scale logging infrastructures using the same."
          events="Rootconf miniconf 2017"
          video={[<iframe width="730" height="411" src="https://www.youtube.com/embed/OuNseqJ5cCU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>]}
          slides={[<iframe src="//www.slideshare.net/slideshow/embed_code/key/6sNOkpUSGAmyUz" width="730" height="411" frameborder="0" marginwidth="0" marginheight="0" styles="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" scrolling="no" allowfullscreen> </iframe>]}
          code="https://github.com/DudeWhoCode/talks/tree/master/serverless_logging_architecture"
          />
          
          <TalkSection 
          title="IoT meets Serverless" 
          abstract="Speed and agility are the most expected in today’s analytics tools. The quicker you get from idea to insights, the more you can innovate & perform ad-hoc data analysis. I will be talking about how we can use AWS serverless architecture to stream IoT data, managed by python. We can be up and running in minutes―starting small, but able to easily grow to millions of devices and billions of messages."
          events="PyData Delhi 2017, PyConf 2017"
          video={[<iframe width="730" height="411" src="https://www.youtube.com/embed/pwy4N19sUzM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>]}
          slides={[<iframe src="//www.slideshare.net/slideshow/embed_code/key/htjwQchYsjO0jg" width="730" height="411" frameborder="0" marginwidth="0" marginheight="0" styles="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" scrolling="no" allowfullscreen> </iframe>]}
          code="https://github.com/DudeWhoCode/talks/tree/master/iot_meets_serverless"
          />
          
          <TalkSection 
          title="Write code for humans, not machines" 
          abstract="Any average programmer can write code by sitting hours and hours, pushing themselves through the sleepless nights but what it takes to write a better readable code?. Forget about the design patterns, I will be talking ground zero from naming variables to handling errors in your python code. After the talk the audience will know how to get started with good programming habits and how not to annoy the code readers :)"
          events="ChennaiPy meetup, July 2017"
          slides={[<iframe src="//www.slideshare.net/slideshow/embed_code/key/xiyDk7qA6QZcaW" width="730" height="411" frameborder="0" marginwidth="0" marginheight="0" styles="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" scrolling="no" allowfullscreen> </iframe>]}
          />

          <TalkSection 
          title="Don't just stop with your Fibonacci code" 
          abstract="A fun and meme filled impromptu lightning talk for Manipal university students on whats waiting for them in the software world out there and how to stand out in the crowd."
          events="ChennaiPy meetup, July 2017"
          slides={[<iframe src="//www.slideshare.net/slideshow/embed_code/key/neYhTRx50Gefdd" width="730" height="411" frameborder="0" marginwidth="0" marginheight="0" styles="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" scrolling="no" allowfullscreen> </iframe>]}
          />
          
        </div>
        
    </div>
  )
}

export default TalksPage