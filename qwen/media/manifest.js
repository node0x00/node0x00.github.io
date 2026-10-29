/*
  Media manifest for the Project Qwen page.
  Each photo/video slot on the page has an ID (data-media="..."). To fill one:
    "id": { src: "media/file.jpg" }                         - a photo or a short .mp4 in this folder
    "id": { embed: "https://www.youtube-nocookie.com/embed/VIDEO_ID" }   - a YouTube video
  Slots without an entry show a neat "to come" panel.
*/
window.QWEN_MEDIA = {
  // the full build video at the top of the page - paste the YouTube video ID when it's live:
  // "youtube-main": { embed: "https://www.youtube-nocookie.com/embed/VIDEO_ID" },

  "hero-robot":             { src: "media/hero-robot.jpg", alt: "Qwen, a black-and-white 3D-printed robot with a round camera head on a scissor lift, in front of two AprilTags" },
  "sketch-original":        { src: "media/sketch-original.jpg", alt: "Hand-drawn concept sketches of the robot" },
  "cad-fusion":             { src: "media/cad-fusion.jpg", alt: "Fusion 360 model of the lower body" },
  "print-parts":            { src: "media/print-parts.jpg", alt: "The 3D printer printing a body part" },
  "scissor-lift":           { src: "media/scissor-lift.jpg", alt: "The scissor lift with the head electronics during testing" },
  "camera-stripped":        { src: "media/camera-stripped.jpg", alt: "The Logitech C920 taken out of its housing" },
  "wake-word-training":     { src: "media/wake-word-training.jpg", alt: "The openWakeWord training notebook" },
  "gesture-debug":          { src: "media/gesture-debug.jpg", alt: "Hand skeleton overlay recognizing the rock sign" },
  "face-recognition":       { src: "media/face-recognition.jpg", alt: "Live view with a face labelled uncertain" },
  "security-unknown-face":  { src: "media/security-unknown-face.jpg", alt: "Qwen facing a person in security mode with its camera view inset" },
  "remote-unlock":          { src: "media/remote-unlock.jpg", alt: "Phone app controlling the door lock and light switches" },
  "hoverboard-mainboard":   { src: "media/hoverboard-mainboard.jpg", alt: "Close-up of the hoverboard's LKS32MC088 microcontroller" },
  "uart-pins":              { src: "media/uart-pins.jpg", alt: "The 12, R1, T1, G pins on the hoverboard board" },
  "logic-analyzer-capture": { src: "media/logic-analyzer-capture.jpg", alt: "PulseView showing the captured serial frames" },
  "zs-x11h-wiring":         { src: "media/zs-x11h-wiring.jpg", alt: "ZS-X11H motor controller wired to a hub motor" },
  "battery-test":           { src: "media/battery-test.jpg", alt: "Measuring the battery output with a multimeter" },
  "dock-contacts":          { src: "media/dock-contacts.jpg", alt: "Fitting the charging contacts to the back of the body" },
  "perfboard-pi":           { src: "media/perfboard-pi.jpg", alt: "Raspberry Pi 4 with a hand-soldered perfboard hat" },
  "perfboard-esp32":        { src: "media/perfboard-esp32.jpg", alt: "ESP32 perfboard with the level shifter and divider resistors" },
  "docking-live-view":      { src: "media/docking-live-view.jpg", alt: "The robot's camera view with both docking tags boxed and a map inset" },
  "docking-run":            { src: "media/docking-run.jpg", alt: "Qwen docking, with its camera view inset" },
  "dock-pads":              { src: "media/dock-pads.jpg", alt: "The dock: two spring contacts on a plate on the wall" },
  "mapping-run":            { src: "media/mapping-run.jpg", alt: "ORB-SLAM features on the camera view during a mapping drive" },
  "orbslam-map":            { src: "media/orbslam-map.jpg", alt: "2D floor map built from the mapping drive" },
  "charging-leds":          { src: "media/charging-leds.jpg", alt: "Qwen docked and charging" },
  "first-components":       { src: "media/first-components.jpg", alt: "Testing a servo, LED module and amplifier" },
  "short-circuit":          { src: "media/short-circuit.jpg", alt: "Probing the perfboard with a multimeter for a short" },
};
