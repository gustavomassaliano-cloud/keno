const fs = require('fs');

// 1. HeroStory
let hero = fs.readFileSync('src/components/Story/HeroStory.tsx', 'utf8');
hero = hero.replace(/const text1Opacity = [^\n]+/, 'const text1Opacity = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [1, 1, 0, 0]);');
hero = hero.replace(/const orbScale = [^\n]+/, 'const orbScale = useTransform(scrollYProgress, [0, 0.1, 0.25], [1, 30, 80]);');
hero = hero.replace(/const orbOpacity = [^\n]+/, 'const orbOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [1, 1, 0, 0]);');
hero = hero.replace(/const text2Opacity = [^\n]+/, 'const text2Opacity = useTransform(scrollYProgress, [0.15, 0.25, 0.8, 0.9], [0, 1, 1, 0]);');
hero = hero.replace(/const uiOpacity = [^\n]+/, 'const uiOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.8, 0.9], [0, 1, 1, 0]);');
hero = hero.replace(/const uiScale = [^\n]+/, 'const uiScale = useTransform(scrollYProgress, [0.2, 0.3], [0.8, 1]);');
// Also ensure pointer-events-none if opacity is 0 for text1 (can just set inline style)
hero = hero.replace(/style=\{\{ opacity: text1Opacity, y: text1Y \}\}/, 'style={{ opacity: text1Opacity, y: text1Y, pointerEvents: "none" }}');
fs.writeFileSync('src/components/Story/HeroStory.tsx', hero);

// 2. DeviceStory
let device = fs.readFileSync('src/components/Story/DeviceStory.tsx', 'utf8');
device = device.replace(/const width = [^\n]+/, 'const width = useTransform(scrollYProgress, [0, 0.2, 0.35, 0.6, 0.75], ["300px", "300px", "800px", "800px", "500px"]);');
device = device.replace(/const height = [^\n]+/, 'const height = useTransform(scrollYProgress, [0, 0.2, 0.35, 0.6, 0.75], ["600px", "600px", "450px", "450px", "300px"]);');
device = device.replace(/const borderRadius = [^\n]+/, 'const borderRadius = useTransform(scrollYProgress, [0, 0.2, 0.35], ["40px", "40px", "16px"]);');
device = device.replace(/const text1Opacity = [^\n]+/, 'const text1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.25, 0.3], [0, 1, 1, 0]);');
device = device.replace(/const text2Opacity = [^\n]+/, 'const text2Opacity = useTransform(scrollYProgress, [0.35, 0.45, 0.65, 0.7], [0, 1, 1, 0]);');
device = device.replace(/const text3Opacity = [^\n]+/, 'const text3Opacity = useTransform(scrollYProgress, [0.75, 0.85, 1, 1], [0, 1, 1, 1]);');
device = device.replace(/const extraOpacity = [^\n]+/, 'const extraOpacity = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);');
device = device.replace(/const extraLeftX = [^\n]+/, 'const extraLeftX = useTransform(scrollYProgress, [0.75, 0.85], [0, -220]);');
device = device.replace(/const extraRightX = [^\n]+/, 'const extraRightX = useTransform(scrollYProgress, [0.75, 0.85], [0, 220]);');
fs.writeFileSync('src/components/Story/DeviceStory.tsx', device);

// 3. CodeStory
let code = fs.readFileSync('src/components/Story/CodeStory.tsx', 'utf8');
code = code.replace(/h-\[250vh\]/, 'h-[120vh]');
code = code.replace(/opacity-20/, 'opacity-5');
fs.writeFileSync('src/components/Story/CodeStory.tsx', code);

console.log('Transformations updated');
