const scenes = [
    {
        id: 1,
        title: "Meet Sunny, Our Star!",
        description: `
            <p>High in the sky lived <strong>Sunny the Sun</strong>. Every day, Sunny shone brightly to keep Earth warm and full of life.</p>
            <p>But sometimes Sunny got very excited. "I think I'll send a special letter today!" Sunny said. This fiery letter wasn't made of paper—it was made of glowing energy.</p>
        `,
        nasaFact: `
            <strong>NASA Fact:</strong> Solar flares and CMEs are bursts of energy and particles that can travel to Earth and affect satellites, power grids, and communications.
        `,
        sceneClass: "scene-sun",
        svg: `
            <svg width="300" height="200" viewBox="0 0 300 200">
                <defs>
                    <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" style="stop-color:#FFD700"/>
                        <stop offset="70%" style="stop-color:#FFA500"/>
                        <stop offset="100%" style="stop-color:#FF6347"/>
                    </radialGradient>
                </defs>
                <circle cx="150" cy="100" r="60" fill="url(#sunGradient)"/>
                <g class="sun-rays">
                    <line x1="150" y1="20" x2="150" y2="35" stroke="#FFD700" stroke-width="3"/>
                    <line x1="210" y1="40" x2="202" y2="48" stroke="#FFD700" stroke-width="3"/>
                    <line x1="240" y1="100" x2="225" y2="100" stroke="#FFD700" stroke-width="3"/>
                    <line x1="210" y1="160" x2="202" y2="152" stroke="#FFD700" stroke-width="3"/>
                    <line x1="150" y1="180" x2="150" y2="165" stroke="#FFD700" stroke-width="3"/>
                    <line x1="90" y1="160" x2="98" y2="152" stroke="#FFD700" stroke-width="3"/>
                    <line x1="60" y1="100" x2="75" y2="100" stroke="#FFD700" stroke-width="3"/>
                    <line x1="90" y1="40" x2="98" y2="48" stroke="#FFD700" stroke-width="3"/>
                </g>
                <circle cx="135" cy="85" r="8" fill="#FF6347"/>
                <circle cx="165" cy="85" r="8" fill="#FF6347"/>
                <path d="M 125 115 Q 150 135 175 115" stroke="#FF6347" stroke-width="3" fill="none"/>
            </svg>
        `
    },
    {
        id: 2,
        title: "Flarey's Journey Begins",
        description: `
            <p>From Sunny's surface burst <strong>Flarey</strong>, a playful solar flare.</p>
            <p>"Zoom! I'm Flarey, Sunny's letter! I'm racing toward Earth!" she giggled, flying faster than anything on Earth.</p>
        `,
        nasaFact: `
            <strong>NASA Fact:</strong> CMEs can travel from the Sun to Earth in 15 hours to several days, carrying charged particles that can disrupt technology.
        `,
        sceneClass: "scene-flare",
        svg: `
            <svg width="300" height="200" viewBox="0 0 300 200">
                <defs>
                    <radialGradient id="sunGradient2" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" style="stop-color:#FFD700"/>
                        <stop offset="100%" style="stop-color:#FFA500"/>
                    </radialGradient>
                    <linearGradient id="flareGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#FF4500"/>
                        <stop offset="50%" style="stop-color:#FF6347"/>
                        <stop offset="100%" style="stop-color:#FFB6C1"/>
                    </linearGradient>
                </defs>
                <circle cx="80" cy="100" r="40" fill="url(#sunGradient2)"/>
                <path d="M 120 100 Q 180 80 220 70 Q 240 90 260 85 Q 250 110 270 120 Q 240 130 220 140 Q 180 120 120 100" fill="url(#flareGradient)"/>
                <circle cx="65" cy="85" r="5" fill="#FF4500"/>
                <circle cx="85" cy="85" r="5" fill="#FF4500"/>
                <path d="M 60 110 Q 80 120 100 110" stroke="#FF4500" stroke-width="2" fill="none"/>
                <g class="sparkles">
                    <circle cx="200" cy="60" r="2" fill="#FFD700"/>
                    <circle cx="230" cy="75" r="1.5" fill="#FFD700"/>
                    <circle cx="250" cy="95" r="2" fill="#FFD700"/>
                    <circle cx="240" cy="125" r="1.5" fill="#FFD700"/>
                </g>
            </svg>
        `
    },
    {
        id: 3,
        title: "Earth's Protective Shield",
        description: `
            <p>When Flarey reached Earth, she saw a strong invisible shield.</p>
            <p>"Whoa! What's this bubble?" Flarey asked.</p>
            <p>"That's my magnetosphere," Earth explained kindly. "It protects people from too much of your energy. But sometimes, you also make something magical…"</p>
        `,
        nasaFact: `
            <strong>NASA Fact:</strong> Earth's magnetosphere shields people from most solar radiation but cannot fully stop effects on satellites, power grids, and GPS.
        `,
        sceneClass: "scene-earth",
        svg: `
            <svg width="300" height="200" viewBox="0 0 300 200">
                <defs>
                    <radialGradient id="earthGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" style="stop-color:#4169E1"/>
                        <stop offset="60%" style="stop-color:#228B22"/>
                        <stop offset="100%" style="stop-color:#4169E1"/>
                    </radialGradient>
                    <radialGradient id="magnetosphereGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" style="stop-color:transparent"/>
                        <stop offset="70%" style="stop-color:rgba(100, 149, 237, 0.3)"/>
                        <stop offset="100%" style="stop-color:rgba(100, 149, 237, 0.6)"/>
                    </radialGradient>
                </defs>
                <ellipse cx="200" cy="100" rx="80" ry="60" fill="url(#magnetosphereGradient)" stroke="#6495ED" stroke-width="2" stroke-dasharray="5,5"/>
                <circle cx="200" cy="100" r="35" fill="url(#earthGradient)"/>
                <path d="M 180 85 Q 195 80 210 85 Q 205 95 195 100 Q 185 95 180 85" fill="#228B22"/>
                <path d="M 190 110 Q 200 115 210 110 Q 205 120 200 125 Q 195 120 190 110" fill="#228B22"/>
                <circle cx="60" cy="60" r="8" fill="url(#flareGradient)"/>
                <g class="magnetic-field-lines">
                    <path d="M 150 70 Q 200 50 250 70" stroke="#6495ED" stroke-width="1" fill="none" opacity="0.6"/>
                    <path d="M 150 130 Q 200 150 250 130" stroke="#6495ED" stroke-width="1" fill="none" opacity="0.6"/>
                    <path d="M 170 85 Q 200 75 230 85" stroke="#6495ED" stroke-width="1" fill="none" opacity="0.4"/>
                    <path d="M 170 115 Q 200 125 230 115" stroke="#6495ED" stroke-width="1" fill="none" opacity="0.4"/>
                </g>
            </svg>
        `
    },
    {
        id: 4,
        title: "Nani Sees the Magic",
        description: `
            <p>At that very moment, <strong>Nani</strong>, a little girl, looked up at the sky. Green and purple lights danced above her head.</p>
            <p>"Wow! The sky is glowing! Thank you, Flarey!" Nani whispered.</p>
        `,
        nasaFact: `
            <strong>NASA Fact:</strong> Auroras occur when charged solar particles interact with Earth's atmosphere, mostly near the poles, creating colorful lights.
        `,
        sceneClass: "scene-aurora",
        svg: `
            <svg width="300" height="200" viewBox="0 0 300 200">
                <defs>
                    <linearGradient id="auroraGreen" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:#00FF7F"/>
                        <stop offset="50%" style="stop-color:#32CD32"/>
                        <stop offset="100%" style="stop-color:#228B22"/>
                    </linearGradient>
                    <linearGradient id="auroraPurple" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:#DA70D6"/>
                        <stop offset="50%" style="stop-color:#9932CC"/>
                        <stop offset="100%" style="stop-color:#4B0082"/>
                    </linearGradient>
                </defs>
                <circle cx="150" cy="160" r="25" fill="url(#earthGradient)"/>
                <g class="aurora-curtains">
                    <path d="M 80 20 Q 85 40 80 60 Q 90 80 85 100 Q 80 120 85 140" stroke="url(#auroraGreen)" stroke-width="4" fill="none" opacity="0.8"/>
                    <path d="M 100 15 Q 105 35 100 55 Q 110 75 105 95 Q 100 115 105 135" stroke="url(#auroraGreen)" stroke-width="5" fill="none" opacity="0.9"/>
                    <path d="M 120 18 Q 125 38 120 58 Q 130 78 125 98 Q 120 118 125 138" stroke="url(#auroraPurple)" stroke-width="4" fill="none" opacity="0.8"/>
                    <path d="M 200 22 Q 205 42 200 62 Q 210 82 205 102 Q 200 122 205 142" stroke="url(#auroraPurple)" stroke-width="5" fill="none" opacity="0.8"/>
                    <path d="M 220 18 Q 225 38 220 58 Q 230 78 225 98 Q 220 118 225 138" stroke="url(#auroraGreen)" stroke-width="4" fill="none" opacity="0.9"/>
                </g>
                <g class="little-girl">
                    <circle cx="150" cy="150" r="8" fill="#FDBCB4"/>
                    <circle cx="147" cy="147" r="1" fill="#000"/>
                    <circle cx="153" cy="147" r="1" fill="#000"/>
                    <path d="M 145 152 Q 150 154 155 152" stroke="#000" stroke-width="1" fill="none"/>
                    <rect x="147" y="158" width="6" height="15" fill="#FF69B4" rx="1"/>
                    <path d="M 140 140 Q 150 135 160 140" fill="#8B4513"/>
                </g>
            </svg>
        `
    },
    {
        id: 5,
        title: "Pilot Ravi's Challenge",
        description: `
            <p>Up in the clouds, <strong>Pilot Ravi</strong> heard a radio crackle.</p>
            <p>"Warning: GPS may not work well today."</p>
            <p>Ravi nodded. "That must be Sunny's letter at work."</p>
        `,
        nasaFact: `
            <strong>NASA Fact:</strong> Solar storms can disrupt high-frequency radio and GPS signals, especially for pilots flying over polar regions.
        `,
        sceneClass: "scene-pilot",
        svg: `
            <svg width="300" height="200" viewBox="0 0 300 200">
                <defs>
                    <linearGradient id="planeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#C0C0C0"/>
                        <stop offset="100%" style="stop-color:#808080"/>
                    </linearGradient>
                </defs>
                <g class="clouds">
                    <ellipse cx="80" cy="160" rx="30" ry="15" fill="#FFF" opacity="0.8"/>
                    <ellipse cx="220" cy="170" rx="25" ry="12" fill="#FFF" opacity="0.7"/>
                    <ellipse cx="50" cy="180" rx="20" ry="10" fill="#FFF" opacity="0.6"/>
                </g>
                <g class="airplane">
                    <ellipse cx="150" cy="100" rx="40" ry="8" fill="url(#planeGradient)"/>
                    <path d="M 120 100 L 100 110 L 110 100 L 100 90 Z" fill="url(#planeGradient)"/>
                    <path d="M 180 100 L 200 110 L 190 100 L 200 90 Z" fill="url(#planeGradient)"/>
                    <rect x="140" y="85" width="20" height="8" fill="#4169E1" rx="2"/>
                </g>
                <g class="pilot">
                    <circle cx="150" cy="92" r="4" fill="#FDBCB4"/>
                    <circle cx="148" cy="90" r="1" fill="#000"/>
                    <circle cx="152" cy="90" r="1" fill="#000"/>
                </g>
                <g class="radio-waves">
                    <path d="M 150 70 Q 170 60 190 70" stroke="#FF6347" stroke-width="2" fill="none" opacity="0.6" stroke-dasharray="3,3"/>
                    <path d="M 150 75 Q 175 65 200 75" stroke="#FF6347" stroke-width="2" fill="none" opacity="0.4" stroke-dasharray="3,3"/>
                    <text x="210" y="70" fill="#FF6347" font-size="12" font-family="Arial">GPS ERROR</text>
                </g>
            </svg>
        `
    },
    {
        id: 6,
        title: "Farmer Lila's Technology",
        description: `
            <p>In the fields, <strong>Farmer Lila</strong> frowned as her drones lost signal.</p>
            <p>"Space weather again! Good thing I checked the forecast."</p>
        `,
        nasaFact: `
            <strong>NASA Fact:</strong> CMEs can interfere with GPS, drones, and other technology that farmers rely on for navigation and precision agriculture.
        `,
        sceneClass: "scene-farmer",
        svg: `
            <svg width="300" height="200" viewBox="0 0 300 200">
                <defs>
                    <linearGradient id="fieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:#90EE90"/>
                        <stop offset="100%" style="stop-color:#228B22"/>
                    </linearGradient>
                </defs>
                <rect x="0" y="120" width="300" height="80" fill="url(#fieldGradient)"/>
                <g class="crops">
                    <rect x="20" y="140" width="3" height="20" fill="#228B22"/>
                    <rect x="40" y="135" width="3" height="25" fill="#228B22"/>
                    <rect x="60" y="138" width="3" height="22" fill="#228B22"/>
                    <rect x="80" y="142" width="3" height="18" fill="#228B22"/>
                    <rect x="220" y="140" width="3" height="20" fill="#228B22"/>
                    <rect x="240" y="135" width="3" height="25" fill="#228B22"/>
                    <rect x="260" y="138" width="3" height="22" fill="#228B22"/>
                    <rect x="280" y="142" width="3" height="18" fill="#228B22"/>
                </g>
                <g class="farmer">
                    <circle cx="150" cy="110" r="8" fill="#FDBCB4"/>
                    <circle cx="147" cy="107" r="1" fill="#000"/>
                    <circle cx="153" cy="107" r="1" fill="#000"/>
                    <path d="M 145 113 Q 150 115 155 113" stroke="#000" stroke-width="1" fill="none"/>
                    <rect x="147" y="118" width="6" height="15" fill="#4169E1" rx="1"/>
                    <path d="M 140 100 Q 150 95 160 100" fill="#8B4513"/>
                    <rect x="135" y="105" width="30" height="8" fill="#D2691E" rx="2"/>
                </g>
                <g class="drone">
                    <rect x="200" y="60" width="20" height="8" fill="#808080" rx="2"/>
                    <circle cx="195" cy="64" r="3" fill="#000"/>
                    <circle cx="225" cy="64" r="3" fill="#000"/>
                    <circle cx="195" cy="64" r="8" fill="none" stroke="#808080" stroke-width="1" opacity="0.5"/>
                    <circle cx="225" cy="64" r="8" fill="none" stroke="#808080" stroke-width="1" opacity="0.5"/>
                    <text x="180" y="50" fill="#FF6347" font-size="10" font-family="Arial">SIGNAL LOST</text>
                </g>
            </svg>
        `
    },
    {
        id: 7,
        title: "Astronaut Maya's View",
        description: `
            <p>High above Earth, <strong>Astronaut Maya</strong> floated inside the space station. She saw the auroras from space.</p>
            <p>"Beautiful! But I'd better stay safe in the shielded room."</p>
        `,
        nasaFact: `
            <strong>NASA Fact:</strong> Astronauts are at risk from high-energy particles during solar storms, so they use shielded areas on the ISS for protection.
        `,
        sceneClass: "scene-astronaut",
        svg: `
            <svg width="300" height="200" viewBox="0 0 300 200">
                <defs>
                    <radialGradient id="stationGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" style="stop-color:#C0C0C0"/>
                        <stop offset="100%" style="stop-color:#808080"/>
                    </radialGradient>
                </defs>
                <circle cx="150" cy="160" r="25" fill="url(#earthGradient)"/>
                <g class="iss">
                    <rect x="140" y="80" width="20" height="30" fill="url(#stationGradient)" rx="3"/>
                    <rect x="120" y="85" width="60" height="8" fill="url(#stationGradient)" rx="2"/>
                    <rect x="135" y="75" width="30" height="5" fill="#4169E1" rx="2"/>
                    <rect x="110" y="82" width="15" height="12" fill="#FFD700" rx="2"/>
                    <rect x="175" y="82" width="15" height="12" fill="#FFD700" rx="2"/>
                </g>
                <g class="astronaut">
                    <circle cx="150" cy="88" r="6" fill="#FFF" stroke="#C0C0C0" stroke-width="1"/>
                    <circle cx="148" cy="86" r="1" fill="#000"/>
                    <circle cx="152" cy="86" r="1" fill="#000"/>
                    <path d="M 146 90 Q 150 92 154 90" stroke="#000" stroke-width="1" fill="none"/>
                    <rect x="147" y="94" width="6" height="12" fill="#C0C0C0" rx="1"/>
                </g>
                <g class="aurora-glow">
                    <path d="M 60 130 Q 80 120 100 130 Q 120 140 140 130" stroke="url(#auroraGreen)" stroke-width="3" fill="none" opacity="0.6"/>
                    <path d="M 160 135 Q 180 125 200 135 Q 220 145 240 135" stroke="url(#auroraPurple)" stroke-width="3" fill="none" opacity="0.6"/>
                </g>
                <g class="stars">
                    <circle cx="80" cy="30" r="1" fill="#FFF"/>
                    <circle cx="220" cy="25" r="1" fill="#FFF"/>
                    <circle cx="260" cy="50" r="1" fill="#FFF"/>
                    <circle cx="40" cy="60" r="1" fill="#FFF"/>
                </g>
            </svg>
        `
    },
    {
        id: 8,
        title: "Omar's Power Grid",
        description: `
            <p>And in a busy city, <strong>Omar the Power Operator</strong> watched his screens carefully.</p>
            <p>"Flarey is making the electricity flicker. Time to balance the grid."</p>
        `,
        nasaFact: `
            <strong>NASA Fact:</strong> Strong solar storms can induce currents in power grids, causing blackouts or equipment damage if not managed properly.
        `,
        sceneClass: "scene-power",
        svg: `
            <svg width="300" height="200" viewBox="0 0 300 200">
                <defs>
                    <linearGradient id="cityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:#4B0082"/>
                        <stop offset="100%" style="stop-color:#000"/>
                    </linearGradient>
                </defs>
                <rect x="0" y="0" width="300" height="200" fill="url(#cityGradient)"/>
                <g class="buildings">
                    <rect x="50" y="120" width="30" height="80" fill="#333"/>
                    <rect x="100" y="100" width="25" height="100" fill="#444"/>
                    <rect x="150" y="110" width="35" height="90" fill="#333"/>
                    <rect x="200" y="90" width="28" height="110" fill="#444"/>
                    <rect x="250" y="130" width="32" height="70" fill="#333"/>
                </g>
                <g class="windows">
                    <rect x="55" y="130" width="4" height="6" fill="#FFD700"/>
                    <rect x="65" y="130" width="4" height="6" fill="#FFD700"/>
                    <rect x="55" y="150" width="4" height="6" fill="#FFD700"/>
                    <rect x="105" y="110" width="4" height="6" fill="#FFD700"/>
                    <rect x="115" y="110" width="4" height="6" fill="#FFD700"/>
                    <rect x="155" y="120" width="4" height="6" fill="#FFD700"/>
                    <rect x="170" y="120" width="4" height="6" fill="#FFD700"/>
                </g>
                <g class="power-lines">
                    <line x1="20" y1="80" x2="280" y2="80" stroke="#666" stroke-width="2"/>
                    <line x1="80" y1="80" x2="80" y2="120" stroke="#666" stroke-width="2"/>
                    <line x1="180" y1="80" x2="180" y2="110" stroke="#666" stroke-width="2"/>
                    <circle cx="80" cy="80" r="3" fill="#FF6347"/>
                    <circle cx="180" cy="80" r="3" fill="#FF6347"/>
                </g>
                <g class="operator">
                    <rect x="20" y="150" width="40" height="30" fill="#222" rx="3"/>
                    <rect x="25" y="155" width="30" height="20" fill="#4169E1" rx="2"/>
                    <circle cx="15" cy="165" r="6" fill="#FDBCB4"/>
                    <circle cx="13" cy="163" r="1" fill="#000"/>
                    <circle cx="17" cy="163" r="1" fill="#000"/>
                    <text x="70" y="170" fill="#FF6347" font-size="10" font-family="Arial">GRID ALERT</text>
                </g>
            </svg>
        `
    },
    {
        id: 9,
        title: "Flarey's Message",
        description: `
            <p>Flarey smiled as she saw everyone adjusting.</p>
            <p>"I don't mean harm—I just wanted to say hello! I bring challenges, but I also paint your skies with light. I'm part of Sunny's heartbeat."</p>
        `,
        nasaFact: `
            <strong>NASA Fact:</strong> While solar storms can disrupt technology, they also create auroras, showing the beauty of space weather.
        `,
        sceneClass: "scene-flarey-message",
        svg: `
            <svg width="300" height="200" viewBox="0 0 300 200">
                <defs>
                    <radialGradient id="flareyGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" style="stop-color:#FF6347"/>
                        <stop offset="50%" style="stop-color:#FF4500"/>
                        <stop offset="100%" style="stop-color:#FFB6C1"/>
                    </radialGradient>
                </defs>
                <circle cx="150" cy="100" r="40" fill="url(#flareyGradient)"/>
                <circle cx="135" cy="85" r="6" fill="#FFD700"/>
                <circle cx="165" cy="85" r="6" fill="#FFD700"/>
                <path d="M 125 115 Q 150 125 175 115" stroke="#FFD700" stroke-width="3" fill="none"/>
                <g class="energy-waves">
                    <circle cx="150" cy="100" r="60" fill="none" stroke="#FF6347" stroke-width="2" opacity="0.3"/>
                    <circle cx="150" cy="100" r="80" fill="none" stroke="#FF6347" stroke-width="1" opacity="0.2"/>
                    <circle cx="150" cy="100" r="100" fill="none" stroke="#FF6347" stroke-width="1" opacity="0.1"/>
                </g>
                <g class="sparkles">
                    <circle cx="80" cy="60" r="2" fill="#FFD700"/>
                    <circle cx="220" cy="70" r="1.5" fill="#FFD700"/>
                    <circle cx="90" cy="140" r="2" fill="#FFD700"/>
                    <circle cx="210" cy="130" r="1.5" fill="#FFD700"/>
                    <circle cx="60" cy="100" r="1.5" fill="#FFD700"/>
                    <circle cx="240" cy="100" r="2" fill="#FFD700"/>
                </g>
                <g class="heart-beat">
                    <path d="M 120 50 Q 130 40 140 50 Q 150 40 160 50 Q 170 40 180 50" stroke="#FFB6C1" stroke-width="2" fill="none" opacity="0.7"/>
                </g>
            </svg>
        `
    },
    {
        id: 10,
        title: "Sunny's Wisdom",
        description: `
            <p>Sunny winked from far away.</p>
            <p>"Even though I'm 93 million miles away, my moods reach you. That's why scientists keep a close eye on me. Space weather may start here with me, but it's part of your world too."</p>
        `,
        nasaFact: `
            <strong>NASA Fact:</strong> NASA monitors the Sun using satellites like SDO and Parker Solar Probe to predict solar storms and protect Earth's technology.
        `,
        sceneClass: "scene-sunny-wisdom",
        svg: `
            <svg width="300" height="200" viewBox="0 0 300 200">
                <circle cx="80" cy="80" r="50" fill="url(#sunGradient)"/>
                <g class="sun-rays">
                    <line x1="80" y1="10" x2="80" y2="25" stroke="#FFD700" stroke-width="3"/>
                    <line x1="130" y1="30" x2="122" y2="38" stroke="#FFD700" stroke-width="3"/>
                    <line x1="150" y1="80" x2="135" y2="80" stroke="#FFD700" stroke-width="3"/>
                    <line x1="130" y1="130" x2="122" y2="122" stroke="#FFD700" stroke-width="3"/>
                    <line x1="80" y1="150" x2="80" y2="135" stroke="#FFD700" stroke-width="3"/>
                    <line x1="30" y1="130" x2="38" y2="122" stroke="#FFD700" stroke-width="3"/>
                    <line x1="10" y1="80" x2="25" y2="80" stroke="#FFD700" stroke-width="3"/>
                    <line x1="30" y1="30" x2="38" y2="38" stroke="#FFD700" stroke-width="3"/>
                </g>
                <circle cx="70" cy="70" r="5" fill="#FF6347"/>
                <circle cx="90" cy="70" r="5" fill="#FF6347"/>
                <path d="M 65 90 Q 80 100 95 90" stroke="#FF6347" stroke-width="3" fill="none"/>
                <circle cx="220" cy="120" r="30" fill="url(#earthGradient)"/>
                <path d="M 205 110 Q 215 105 225 110" fill="#228B22"/>
                <g class="satellites">
                    <rect x="180" y="60" width="8" height="12" fill="#C0C0C0" rx="1"/>
                    <rect x="175" y="65" width="18" height="2" fill="#FFD700"/>
                    <rect x="160" y="100" width="10" height="8" fill="#C0C0C0" rx="1"/>
                    <rect x="155" y="103" width="20" height="2" fill="#FFD700"/>
                </g>
                <g class="monitoring-waves">
                    <path d="M 130 80 Q 150 70 170 80" stroke="#4169E1" stroke-width="1" fill="none" stroke-dasharray="2,2" opacity="0.6"/>
                    <path d="M 130 85 Q 155 75 180 85" stroke="#4169E1" stroke-width="1" fill="none" stroke-dasharray="2,2" opacity="0.4"/>
                </g>
            </svg>
        `
    },
    {
        id: 11,
        title: "Connected by Light",
        description: `
            <p>And as night fell, children, pilots, farmers, astronauts, and scientists all looked up, connected by the same dancing lights in the sky.</p>
        `,
        nasaFact: `
            <strong>NASA Fact:</strong> Space weather affects everyone differently — from auroras to GPS and power systems — but scientists help us prepare and stay safe.
        `,
        sceneClass: "scene-finale",
        svg: `
            <svg width="300" height="200" viewBox="0 0 300 200">
                <defs>
                    <linearGradient id="nightSky" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:#191970"/>
                        <stop offset="100%" style="stop-color:#000"/>
                    </linearGradient>
                </defs>
                <rect x="0" y="0" width="300" height="200" fill="url(#nightSky)"/>
                <g class="aurora-finale">
                    <path d="M 50 30 Q 75 20 100 30 Q 125 40 150 30 Q 175 20 200 30 Q 225 40 250 30" stroke="url(#auroraGreen)" stroke-width="4" fill="none" opacity="0.8"/>
                    <path d="M 60 40 Q 85 30 110 40 Q 135 50 160 40 Q 185 30 210 40 Q 235 50 260 40" stroke="url(#auroraPurple)" stroke-width="3" fill="none" opacity="0.7"/>
                </g>
                <g class="people-silhouettes">
                    <circle cx="50" cy="160" r="4" fill="#333"/>
                    <rect x="48" y="164" width="4" height="10" fill="#333"/>
                    <circle cx="100" cy="155" r="4" fill="#333"/>
                    <rect x="98" y="159" width="4" height="12" fill="#333"/>
                    <circle cx="150" cy="158" r="4" fill="#333"/>
                    <rect x="148" y="162" width="4" height="11" fill="#333"/>
                    <circle cx="200" cy="156" r="4" fill="#333"/>
                    <rect x="198" y="160" width="4" height="12" fill="#333"/>
                    <circle cx="250" cy="159" r="4" fill="#333"/>
                    <rect x="248" y="163" width="4" height="10" fill="#333"/>
                </g>
                <g class="stars">
                    <circle cx="80" cy="60" r="1" fill="#FFF"/>
                    <circle cx="120" cy="70" r="1" fill="#FFF"/>
                    <circle cx="180" cy="65" r="1" fill="#FFF"/>
                    <circle cx="220" cy="55" r="1" fill="#FFF"/>
                    <circle cx="40" cy="80" r="1" fill="#FFF"/>
                    <circle cx="260" cy="75" r="1" fill="#FFF"/>
                </g>
                <g class="connection-lines">
                    <line x1="50" y1="150" x2="100" y2="145" stroke="#FFD700" stroke-width="1" opacity="0.3"/>
                    <line x1="100" y1="145" x2="150" y2="148" stroke="#FFD700" stroke-width="1" opacity="0.3"/>
                    <line x1="150" y1="148" x2="200" y2="146" stroke="#FFD700" stroke-width="1" opacity="0.3"/>
                    <line x1="200" y1="146" x2="250" y2="149" stroke="#FFD700" stroke-width="1" opacity="0.3"/>
                </g>
            </svg>
             `
    }
];