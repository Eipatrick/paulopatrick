// Binary/Code rain effect for cyberpunk background
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.3';
    document.body.appendChild(canvas);
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Binary characters
    const binary = '01';
    const columns = Math.floor(canvas.width / 20);
    const drops = [];
    
    // Set initial positions
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * canvas.height);
    }
    
    // Draw the matrix effect
    function drawMatrix() {
        // Black background with opacity
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0f0'; // Matrix green
        ctx.font = '15px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = binary.charAt(Math.floor(Math.random() * binary.length));
            const x = i * 20;
            const y = drops[i] * 20;
            
            ctx.fillText(text, x, y);
            
            // Reset drop to top when it reaches bottom
            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            drops[i]++;
        }
    }
    
    // Animation loop
    function animate() {
        drawMatrix();
        requestAnimationFrame(animate);
    }
    
    animate();
});

// Network node connection visualization
function initNetworkVisualization() {
    const networkCanvas = document.createElement('canvas');
    const networkCtx = networkCanvas.getContext('2d');
    networkCanvas.style.position = 'fixed';
    networkCanvas.style.top = '0';
    networkCanvas.style.left = '0';
    networkCanvas.style.zIndex = '-1';
    networkCanvas.style.opacity = '0.2';
    document.body.appendChild(networkCanvas);
    
    function resizeNetworkCanvas() {
        networkCanvas.width = window.innerWidth;
        networkCanvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resizeNetworkCanvas);
    resizeNetworkCanvas();
    
    // Network nodes
    const nodes = [];
    const connections = [];
    const nodeCount = 15;
    
    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            x: Math.random() * networkCanvas.width,
            y: Math.random() * networkCanvas.height,
            radius: 2 + Math.random() * 3,
            vx: Math.random() * 2 - 1,
            vy: Math.random() * 2 - 1
        });
    }
    
    // Draw network
    function drawNetwork() {
        networkCtx.clearRect(0, 0, networkCanvas.width, networkCanvas.height);
        
        // Update node positions
        nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;
            
            // Bounce off walls
            if (node.x < 0 || node.x > networkCanvas.width) node.vx *= -1;
            if (node.y < 0 || node.y > networkCanvas.height) node.vy *= -1;
            
            // Draw node
            networkCtx.beginPath();
            networkCtx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            networkCtx.fillStyle = '#05d9e8';
            networkCtx.fill();
        });
        
        // Draw connections
        nodes.forEach((nodeA, i) => {
            nodes.slice(i + 1).forEach(nodeB => {
                const dx = nodeA.x - nodeB.x;
                const dy = nodeA.y - nodeB.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 150) {
                    networkCtx.beginPath();
                    networkCtx.moveTo(nodeA.x, nodeA.y);
                    networkCtx.lineTo(nodeB.x, nodeB.y);
                    networkCtx.strokeStyle = `rgba(5, 217, 232, ${1 - dist/150})`;
                    networkCtx.lineWidth = 0.5;
                    networkCtx.stroke();
                }
            });
        });
        
        requestAnimationFrame(drawNetwork);
    }
    
    drawNetwork();
}

// Initialize both effects
initNetworkVisualization();