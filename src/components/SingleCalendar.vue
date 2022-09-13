<script setup>
import { computed, ref } from "vue";

// define props
const props = defineProps({
  day: {
    type: Number,
    default: 0,
  },
});

const timestamps = ref([
  {
    id: 9,
    isReserved: false,
  },
  {
    id: 10,
    isReserved: false,
  },
  {
    id: 11,
    isReserved: false,
  },
  {
    id: 12,
    isReserved: false,
  },
  {
    id: 13,
    isReserved: false,
  },
  {
    id: 14,
    isReserved: false,
  },
  {
    id: 15,
    isReserved: false,
  },
  {
    id: 16,
    isReserved: false,
  },
  {
    id: 17,
    isReserved: false,
  },
  {
    id: 18,
    isReserved: false,
  },
  {
    id: 19,
    isReserved: false,
  },
]);

const handleTimestampClick = (id) => {
  const timestamp = timestamps.value.find((el) => el.id === id);
  timestamp.isReserved = !timestamp.isReserved;
};

const getCurrentDate = computed(() => {
  const date = new Date();
  date.setDate(date.getDate() + props.day);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("ru-RU", options);
});
</script>

<template>
  <div class="calendar">
    <div class="calendar__day">{{ getCurrentDate }}</div>
    <div class="calendar__list">
      <div
        v-for="el in timestamps"
        :key="el.id"
        @click.prevent="handleTimestampClick(el.id)"
        class="calendar__item"
      >
        <div class="calendar__timestamp">
          {{ el.id < 10 ? `0${el.id}` : el.id }}:00
        </div>
        <div v-if="el.isReserved" class="calendar__event">Занято</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$silver: rgba(138, 138, 138, 255);
$silver-light: rgba(207, 206, 207, 255);
$purple: rgba(198, 120, 223, 255);
$purple-light: rgba(244, 224, 249, 255);
$purple-dark: #7e418b;
.calendar {
  background-color: #fff;
  border: 1px solid $silver-light;
  color: $silver;
  width: 380px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 4px 11px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  // disable text selection
  user-select: none;
}
.calendar__day {
  padding: 20px 20px 40px 20px;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #000;
  // first letter of first word in uppercase
  &::first-letter {
    text-transform: uppercase;
  }
}
.calendar__list {
  padding-left: 70px;
}
.calendar__item {
  height: 50px;
  position: relative;
  font-size: 14px;
  border-top: 1px solid $silver-light;
  padding: 2px 0;
  cursor: pointer;
}
.calendar__timestamp {
  position: absolute;
  left: -45px;
  top: 0;
  transform: translateY(-50%);
}
.calendar__event {
  background-color: $purple-light;
  color: $purple-dark;
  font-weight: bold;
  height: 100%;
  padding: 6px 10px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  &::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    content: "";
    background-color: $purple;
  }
}
</style>
