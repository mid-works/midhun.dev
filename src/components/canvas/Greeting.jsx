import { useEffect, useState } from "react";

const Greeting = () => {
  const [greeting, setGreeting] = useState("Good to see you!");
  const [city, setCity] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();

    const morningGreetings = [
      "Good morning! How’s the weather today in {city}?",
      "Morning sunshine! What’s it like outside in {city} today?",
      "Hey there, good morning! Is it a bright start in {city}?",
      "Good morning! Hope it’s a beautiful day out there in {city}.",
      "Good morning! How’s {city} looking this morning — sunny or sleepy?",
      "Morning vibes! How’s the sky looking over {city} today?",
      "Good morning! Always a good day to check out what’s new in {city}.",
      "Good morning! How’s the breeze in {city} today?",
      "Morning! Hope {city} is waking up with great energy.",
      "Good morning! What’s the vibe in {city} today? 🌤️",
    ];

    const afternoonGreetings = [
      "Good afternoon! How’s the weather shaping up in {city}?",
      "Afternoon there! Is it nice and warm in {city}?",
      "Hey! How’s your day going in {city}?",
      "Good afternoon! Hope it’s not too hot out in {city}.",
      "Hello there! How’s the sky looking in {city} this afternoon?",
      "Afternoon! What’s the mood like in {city} right now?",
      "Good afternoon! Perfect day to explore {city}, isn’t it?",
      "Hi there! How’s the mid-day vibe around {city}?",
      "Good afternoon! How’s everything feeling over in {city}?",
      "Afternoon vibes! What’s happening in {city} today? 🌞",
    ];

    const eveningGreetings = [
      "Good evening! How’s the weather cooling down in {city}?",
      "Evening there! What’s it like outside in {city} right now?",
      "Hey! Hope it’s a calm evening in {city}.",
      "Good evening! How’s {city} looking under the night lights?",
      "Evening vibes! Is it breezy in {city} tonight?",
      "Hello there! Hope you’re enjoying a peaceful evening in {city}.",
      "Good evening! How’s the sky over {city} tonight — stars or clouds?",
      "Evening! Hope {city} feels relaxing tonight.",
      "Good evening! How’s the weather treating you there in {city}?",
      "Evening there! What’s the night like in {city}? ",
    ];

    let chosenGreetings;
    if (hour >= 5 && hour < 12) chosenGreetings = morningGreetings;
    else if (hour >= 12 && hour < 17) chosenGreetings = afternoonGreetings;
    else chosenGreetings = eveningGreetings;

    const randomGreeting =
      chosenGreetings[Math.floor(Math.random() * chosenGreetings.length)];

    // Get city using IP geolocation API
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const userCity = data.city || "your city";
        setCity(userCity);
        setGreeting(randomGreeting.replace("{city}", userCity));
      })
      .catch(() => {
        setGreeting(randomGreeting.replace("{city}", "your place"));
      });
  }, []);

  return (
    <h1 className="text-[20px] sm:text-[24px] text-secondary font-medium tracking-wide">
      {greeting}
    </h1>
  );
};

export default Greeting;
