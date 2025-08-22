import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('logo', { static: false }) logo: ElementRef | undefined;  // Reference to the logo element

  private x: number = 0; // Horizontal position
  private y: number = 0; // Vertical position
  private dx: number = 2; // Speed in X direction
  private dy: number = 2; // Speed in Y direction
  private logoWidth: number = 250; // Width of the logo
  private logoHeight: number = 250; // Height of the logo
  private containerWidth: number = 0; // Container width
  private containerHeight: number = 0; // Container height

  private animationFrameId: any;

  ngOnInit(): void {
    // Get the size of the container after the component is initialized
    this.containerWidth = window.innerWidth;
    this.containerHeight = 360; // You can adjust this value to match your container height
    this.startAnimation();
  }

  ngOnDestroy(): void {
    // Clean up the animation when the component is destroyed
    cancelAnimationFrame(this.animationFrameId);
  }

  // Start the bouncing animation
  startAnimation() {
    const moveLogo = () => {
      this.x += this.dx;
      this.y += this.dy;

      // Check for horizontal bouncing (left/right)
      if (this.x + this.logoWidth > this.containerWidth || this.x < 0) {
        this.dx = -this.dx; // Reverse horizontal direction
      }

      // Check for vertical bouncing (top/bottom)
      if (this.y + this.logoHeight > this.containerHeight || this.y < 0) {
        this.dy = -this.dy; // Reverse vertical direction
      }

      // Update the position of the logo
      if (this.logo) {
        this.logo.nativeElement.style.left = `${this.x}px`;
        this.logo.nativeElement.style.top = `${this.y}px`;
      }

      // Call the next frame of the animation
      this.animationFrameId = requestAnimationFrame(moveLogo);
    };

    // Start the animation loop
    moveLogo();
  }
}
