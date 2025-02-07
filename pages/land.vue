<template>
  <div class="grid grid-cols-3 mt-12">
    <div class="col-span-2 flex justify-center items-center">
      <div class="flex-col items-justify-center w-4/5">
        <h2 class="h2font font-bold text-5xl px-24 my-4">
          Enhanced tracking to achieve your optimal fitness goals
        </h2>
        <h3 class="text-gray-300 px-24">
          Motivate users with benefits and positive reinforcement, and offer
          modifications and progress tracking.
        </h3>
        <div class="flex justify-center py-2 space-x-2">
          <UButton
            size="sm"
            color="sky"
            variant="solid"
            label="Start training"
            :trailing="false"
          />
          <UButton
            icon="i-material-symbols:play-circle"
            size="sm"
            color="sky"
            variant="ghost"
            label="Watch demo"
            :trailing="false"
          />
        </div>
      </div>
    </div>

    <div class="col-start-3 flex items-center">
      <img src="public/fitness.png" class="h-96" />
      <img
        src="public/studio-portrait-bearded-brutal-male-isolated-gray-background-b.png"
        class="h-96"
      />
    </div>
  </div>

  <div class="flex justify-center mt-24">
    <h2 class="h2font font-bold text-3xl">Explore our programs</h2>
  </div>

  <div class="relative w-full max-w-7xl mx-auto">
    <UCarousel
      v-slot="{ item }"
      :items="programs"
      :ui="{
        item: 'basis-1/3 md:basis-1/4',
        container: 'carousel-container',
      }"
      arrows
      class="rounded-full"
    >
      <LandProgramCard
        :title="item.title"
        :description="item.description"
        :icon="item.icon"
        class="transform transition-all duration-500 mx-2 my-2"
      />
    </UCarousel>
  </div>

  <div class="flex justify-around mt-8">
    <div class="w-2/3 flex justify-around">
      <h2 class="h2font font-bold text-3xl w-2/3">
        Enhance user experience with healthy nutrition tips, support resources,
        and social elements.
      </h2>
      <UButton
        class="my-4"
        size="sm"
        color="sky"
        variant="solid"
        label="Join us"
        :trailing="false"
      />
    </div>
  </div>

  <div class="flex justify-center mt-24">
    <div class="w-4/5 flex-col">
      <div>
        <h2 class="h2font font-bold text-3xl">Why join?</h2>
      </div>

      <div class="grid grid-cols-2 gap-6 mt-8">
        <div class="flex">
          <div>
            <UIcon
              name="material-symbols:check"
              class="h-10 w-10 bg-blue-500"
            />
          </div>
          <div class="flex-col items-justify-center">
            <h2 class="h2font font-bold text-2xl">
              Easily track your progress
            </h2>
            <p class="h2font text-gray-300 text-lg">
              Advanced tools to monitor and analyze your fitness journey.
            </p>
          </div>
        </div>
        <div class="flex">
          <div>
            <UIcon
              name="material-symbols:check"
              class="h-10 w-10 bg-blue-500"
            />
          </div>
          <div class="flex-col items-justify-center">
            <h2 class="h2font font-bold text-2xl">Tried and tested programs</h2>
            <p class="h2font text-gray-300 text-lg">
              Programs designed by fitness experts to help you achieve your
              goals.
            </p>
          </div>
        </div>
        <div class="flex">
          <div>
            <UIcon
              name="material-symbols:check"
              class="h-10 w-10 bg-blue-500"
            />
          </div>
          <div class="flex-col items-justify-center">
            <h2 class="h2font font-bold text-2xl">Community</h2>
            <p class="h2font text-gray-300 text-lg">
              Be part of a community that supports and motivates each other.
            </p>
          </div>
        </div>
        <div class="flex">
          <div>
            <UIcon
              name="material-symbols:check"
              class="h-10 w-10 bg-blue-500"
            />
          </div>
          <div class="flex-col items-justify-center">
            <h2 class="h2font font-bold text-2xl">AI Coach</h2>
            <p class="h2font text-gray-300 text-lg">
              Get personalized recommendations and feedback from our AI coach.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex-col items-justify-center mt-24">
    <div class="flex justify-center">
      <h2 class="h2font font-bold text-3xl">Our Packages</h2>
    </div>
    <div class="flex justify-center">
      <div class="flex items-start space-x-4 mt-4">
        <PackageCard
          title="Basic package"
          description="billed monthly"
          price="£25"
        />
        <PackageCard
          title="Mid package"
          description="billed monthly"
          price="£35"
        />
        <PackageCard
          title="Pro package"
          description="billed monthly"
          price="£55"
        />
      </div>
    </div>
  </div>

  <div class="grid grid-cols-2 mt-24">
    <div class="col-start-1 flex justify-center">
      <div class="flex-col items-justify-center">
        <h2 class="h2font font-bold text-3xl">What Our Members</h2>
        <h2 class="h2font font-bold text-3xl">Say about Us?</h2>
      </div>
    </div>
    <div class="col-start-2 flex justify-center">
      <div class="flex-col items-justify-center">
        <UCard class="w-1/2">
          <div class="flex-col items-justify-center">
            <div class="flex space-x-1">
              <UIcon
                name="i-ic:baseline-star"
                class="h-10 w-10 bg-yellow-500"
              />
              <UIcon
                name="i-ic:baseline-star"
                class="h-10 w-10 bg-yellow-500"
              />
              <UIcon
                name="i-ic:baseline-star"
                class="h-10 w-10 bg-yellow-500"
              />
              <UIcon
                name="i-ic:baseline-star"
                class="h-10 w-10 bg-yellow-500"
              />
              <UIcon
                name="i-ic:baseline-star"
                class="h-10 w-10 bg-yellow-500"
              />
            </div>
            <p class="h2font text-gray-300 text-sm italics mt-2">
              “Join this fitness member, the best choice that I’ve. They’re very
              professional and give you suggestion about what food and nutrition
              that you can eat”
            </p>
            <div class="flex justify-center items-center">
              <UIcon
                name="i-material-symbols:account-circle"
                class="h-16 w-16 bg-blue-500 mx-2"
              />
              <div class="flex-col">
                <h2 class="h2font font-bold text-2xl">Ray Rubia</h2>
                <p class="h2font text-gray-300 text-sm">Fitness Member</p>
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup>
const programs = ref([
  {
    title: "Fat Loss",
    description:
      "Effective strategies and workouts to help you shed excess fat and stay fit.",
    icon: "ph:arrow-fat-down-fill",
  },
  {
    title: "Marathon Prep",
    description:
      "Comprehensive training plans to prepare you for marathon success.",
    icon: "material-symbols:directions-run",
  },
  {
    title: "Muscle Gain",
    description:
      "Build strength and size with targeted workouts and nutrition plans.",
    icon: "icon-park-outline:muscle",
  },
  {
    title: "Hybrid Training",
    description:
      "Combines strength, cardio, and flexibility for a balanced and effective workouts.",
    icon: "hugeicons:equipment-gym-03",
  },
  {
    title: "Injury Prevention",
    description:
      "Prevent injuries with targeted exercises and expert guidance for safe and effective workouts.",
    icon: "ic:outline-health-and-safety",
  },
  {
    title: "Rehabilitation",
    description:
      "Personalized recovery plans to help you regain strength and mobility after injury.",
    icon: "solar:adhesive-plaster-bold",
  },
  // Repeat for other 4 items
]);
</script>

<style>
.h2font {
  font-family: Urbanist;
}
.carousel-container {
  @apply relative;
  perspective: 1000px;
}

.UCarousel__item {
  @apply absolute top-1/2 left-1/2;
  transform-style: preserve-3d;
  transition: transform 0.5s;
}

/* Circular positioning logic */
.UCarousel__item:nth-child(1) {
  transform: rotate(0deg) translateX(300px) rotate(0deg);
}
.UCarousel__item:nth-child(2) {
  transform: rotate(72deg) translateX(300px) rotate(-72deg);
}
.UCarousel__item:nth-child(3) {
  transform: rotate(144deg) translateX(300px) rotate(-144deg);
}
.UCarousel__item:nth-child(4) {
  transform: rotate(216deg) translateX(300px) rotate(-216deg);
}
.UCarousel__item:nth-child(5) {
  transform: rotate(288deg) translateX(300px) rotate(-288deg);
}
</style>
