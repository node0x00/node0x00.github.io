/*
  Media manifest for the Project Qwen page.

  Every photo/video slot on the page has an ID (data-media="..."). To fill a slot, do ONE of:
    1. Drop a file into this folder named after the ID - e.g. docking-run.mp4 or cad-fusion.jpg -
       and add a line below:            "cad-fusion": { src: "media/cad-fusion.jpg" },
    2. For a big video, upload it to YouTube (unlisted is fine) and use the embed link:
                                        "docking-run": { embed: "https://www.youtube.com/embed/VIDEO_ID" },
  Optional: alt: "text for screen readers" (defaults to the caption).
  Slots without an entry show a neat "photo/video to come" panel, so nothing looks broken.
  .mp4 / .webm files play as muted, looping, inline video with controls.
*/
window.QWEN_MEDIA = {
  "hero-robot":      { src: "media/hero-robot.jpg", alt: "Qwen, a black-and-white 3D-printed robot with a round camera head on a scissor lift, in front of two AprilTags on a wall" },
  "dock-pads":       { src: "media/dock-pads.jpg", alt: "The charging dock: two spring-loaded metal contact pads on a black plastic plate glued to the wall above the baseboard" },
  "perfboard-pi":    { src: "media/perfboard-pi.jpg", alt: "Raspberry Pi 4 with a hand-soldered perfboard hat carrying power, UART, I2S, I2C, PIR and flashlight wiring" },
  "perfboard-esp32": { src: "media/perfboard-esp32.jpg", alt: "ESP32 on a perfboard with the logic-level shifter and the 10 kilo-ohm hall-sensor divider resistors" },
  "orbslam-map":     { src: "media/orbslam-map.jpg", alt: "2D floor map built from a 17-minute ORB-SLAM mapping drive: driven path in blue, obstacle points in black, the dock in red" },

  // still to come (add entries as files arrive):
  // "sketch-original":        { src: "media/sketch-original.jpg" },
  // "cad-fusion":             { src: "media/cad-fusion.jpg" },
  // "print-parts":            { src: "media/print-parts.jpg" },
  // "camera-stripped":        { src: "media/camera-stripped.jpg" },
  // "scissor-lift-motion":    { embed: "https://www.youtube.com/embed/..." },
  // "hoverboard-mainboard":   { src: "media/hoverboard-mainboard.jpg" },
  // "logic-analyzer-capture": { src: "media/logic-analyzer-capture.png" },
  // "zs-x11h-wiring":         { src: "media/zs-x11h-wiring.jpg" },
  // "drivetrain-assembled":   { src: "media/drivetrain-assembled.jpg" },
  // "gesture-debug":          { src: "media/gesture-debug.mp4" },
  // "face-recognition":       { src: "media/face-recognition.mp4" },
  // "security-unknown-face":  { embed: "https://www.youtube.com/embed/..." },
  // "telegram-alert":         { src: "media/telegram-alert.png" },
  // "remote-unlock":          { embed: "https://www.youtube.com/embed/..." },
  // "docking-live-view":      { src: "media/docking-live-view.png" },
  // "docking-run":            { embed: "https://www.youtube.com/embed/..." },
  // "mapping-run":            { embed: "https://www.youtube.com/embed/..." },
  // "lost-tag-search":        { embed: "https://www.youtube.com/embed/..." },
  // "charging-leds":          { src: "media/charging-leds.jpg" },
  // "control-page":           { src: "media/control-page.png" },
};
