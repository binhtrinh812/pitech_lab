<template>
  <div>
    <div class="member-container">
      <div class="member-title">
        <h6>team</h6>
        <h1>Gặp gỡ đội ngũ Pitech Lab</h1>
      </div>
      <div class="member-leader">
        <div class="leader-text">
          <h1>Leader !</h1>
          <p>
            Lecturer at Vietnam CMC University and FPT University.
            Collaborating with IMT Company on AI applications.
          </p>
        </div>
        <div class="leader-card">
          <div class="leader-img">
            <img :src="imageLd" alt />
          </div>
          <div class="leader-content">
            <div class="leader-name">Dr. Ngo Hoang Huy</div>
            <div class="leader-contact">
              <div class="leader-icon">
                <font-awesome-icon :icon="['fas', 'phone']" class="icon" />
              </div>
              <div class="leader-icon">
                <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
              </div>
              <div class="leader-icon">
                <font-awesome-icon :icon="['fas', 'paper-plane']" class="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="member-list">
        <div class="member-list-title">Member !</div>
        <div class="member-list-card">
          <div class="card-item">
            <div class="member-card">
              <div class="member-img">
                <img :src="imageMb" alt />
              </div>
              <div class="member-content">
                <div class="member-name">Dr. Ngo Hoang Huy</div>
                <div class="member-contact">
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'briefcase']" class="icon" />
                  </div>
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'phone']" class="icon" />
                  </div>
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
                  </div>
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'paper-plane']" class="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-item">
            <div class="member-card">
              <div class="member-img">
                <img :src="imageMb" alt />
              </div>
              <div class="member-content">
                <div class="member-name">Dr. Ngo Hoang Huy</div>
                <div class="member-contact">
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'briefcase']" class="icon" />
                  </div>
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'phone']" class="icon" />
                  </div>
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
                  </div>
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'paper-plane']" class="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-item">
            <div class="member-card">
              <div class="member-img">
                <img :src="imageMb" alt />
              </div>
              <div class="member-content">
                <div class="member-name">Dr. Ngo Hoang Huy</div>
                <div class="member-contact">
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'briefcase']" class="icon" />
                  </div>
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'phone']" class="icon" />
                  </div>
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
                  </div>
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'paper-plane']" class="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-item">
            <div class="member-card">
              <div class="member-img">
                <img :src="imageMb" alt />
              </div>
              <div class="member-content">
                <div class="member-name">Dr. Ngo Hoang Huy</div>
                <div class="member-contact">
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'briefcase']" class="icon" />
                  </div>
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'phone']" class="icon" />
                  </div>
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
                  </div>
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'paper-plane']" class="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-item">
            <div class="member-card">
              <div class="member-img">
                <img :src="imageMb" alt />
              </div>
              <div class="member-content">
                <div class="member-name">Dr. Ngo Hoang Huy</div>
                <div class="member-contact">
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'briefcase']" class="icon" />
                  </div>
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'phone']" class="icon" />
                  </div>
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
                  </div>
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'paper-plane']" class="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-item">
            <div class="member-card">
              <div class="member-img">
                <img :src="imageMb" alt />
              </div>
              <div class="member-content">
                <div class="member-name">Dr. Ngo Hoang Huy</div>
                <div class="member-contact">
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'briefcase']" class="icon" />
                  </div>
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'phone']" class="icon" />
                  </div>
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
                  </div>
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'paper-plane']" class="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-item">
            <div class="member-card">
              <div class="member-img">
                <img :src="imageMb" alt />
              </div>
              <div class="member-content">
                <div class="member-name">Dr. Ngo Hoang Huy</div>
                <div class="member-contact">
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'briefcase']" class="icon" />
                  </div>
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'phone']" class="icon" />
                  </div>
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
                  </div>
                  <div class="member-icon">
                    <font-awesome-icon :icon="['fas', 'paper-plane']" class="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imageLd from "@/assets/public/About/Member/leader.png";
import imageMb from "@/assets/public/About/Member/member.png";
import "./Member.css";

export default {
  name: "Member",
  data() {
    return {
      imageLd,
      imageMb
    };
  }
};
</script>