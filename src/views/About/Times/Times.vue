<template>
  <div>
    <div class="timeLine-container">
      <div class="timeline" v-for="(timeline, index) in timelines" :key="index">
        <div class="year">
          <div class="inner">
            <span>{{ timeline.year }}</span>
          </div>
        </div>
        <ul class="days">
          <li class="day" v-for="(event, idx) in timeline.events" :key="idx">
            <div class="events">
              <p v-if="event.text">{{ event.text }}</p>
              <div class="day__img" v-if="event.img">
                <img :src="event.img" alt="Timeline image" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import imageTl1 from "@/assets/public/About/TimeLines/timeline-1.jpg";
import imageTl2 from "@/assets/public/About/TimeLines/timeline-2.jpg";
import imageTl3 from "@/assets/public/About/TimeLines/timeline-3.jpg";
import "./Times.css";

export default {
  name: "Times",
  data() {
    return {
      timelines: [
        {
          year: "2016",
          events: [
            { text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
            { img: imageTl1 }
          ],
        },
        {
          year: "2017",
          events: [
            { text: "Eius perferendis vitae, facere accusantium magni, explicabo mollitia.Eius perferendis vitae, facere accusantium magni, explicabo mollitia.Eius perferendis vitae, facere accusantium magni, explicabo mollitia." },
            { img: imageTl2 }
          ],
        },
        {
          year: "2018",
          events: [
            { text: "Consequuntur ratione dolorum velit maiores quam odit odio suscipit." },
            { img: imageTl3 }
          ],
        }
      ]
    };
  }
};
</script>