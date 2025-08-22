import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sonic-bounce',
  templateUrl: './sonic-bounce.component.html',
  styleUrls: ['./sonic-bounce.component.css']
})
export class SonicBounceComponent implements OnInit, OnDestroy {
  @ViewChild('sonicImg', { static: true }) sonicImg!: ElementRef<HTMLImageElement>;

  posX = 0;
  posY = 0;
  velocityX = 15;
  velocityY = 15;

  animationFrameId: any;

  ngOnInit() {
    const img = this.sonicImg.nativeElement;
    img.onload = () => {
      // Set random initial position within the window (taking the image size into account)
      this.posX = Math.random() * (window.innerWidth - img.width);
      this.posY = Math.random() * (window.innerHeight - img.height);
      this.move();
    };

    // Ensure the image is loaded before starting the animation
    if (img.complete) {
      this.posX = Math.random() * (window.innerWidth - img.width);
      this.posY = Math.random() * (window.innerHeight - img.height);
      this.move();
    }
  }

  move() {
    const img = this.sonicImg.nativeElement;
    
    // Update position based on velocity
    this.posX += this.velocityX;
    this.posY += this.velocityY;

    // Bounce logic (check for boundaries)
    if (this.posX + img.width >= window.innerWidth || this.posX <= 0) {
      this.velocityX = -this.velocityX;  // Reverse horizontal direction
    }

    if (this.posY + img.height >= window.innerHeight || this.posY <= 0) {
      this.velocityY = -this.velocityY;  // Reverse vertical direction
    }

    // Apply updated position to the image
    img.style.left = `${this.posX}px`;
    img.style.top = `${this.posY}px`;

    // Request the next animation frame
    this.animationFrameId = requestAnimationFrame(() => this.move());
  }

  // Adjust position on window resize
  @HostListener('window:resize')
  onResize() {
    const img = this.sonicImg.nativeElement;
    if (this.posX + img.width > window.innerWidth) {
      this.posX = window.innerWidth - img.width;
    }
    if (this.posY + img.height > window.innerHeight) {
      this.posY = window.innerHeight - img.height;
    }
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animationFrameId);  // Cleanup on destroy
  }
}
