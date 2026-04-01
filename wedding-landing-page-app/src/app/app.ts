import { Component, OnInit, OnDestroy, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-screen font-sans flex flex-col items-center relative overflow-hidden" style="background-color: #f9f7f2; color: #2C3E50;">
      
      <!-- Boho Background Decorations -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-40">
        <!-- Top Left Floral/Abstract -->
        <svg class="absolute -top-10 -left-10 w-64 h-64" style="color: #8A9A5B;" viewBox="0 0 200 200" fill="currentColor">
          <path d="M45.7,-76.3C58.9,-69.3,69.1,-55.3,77.7,-40.5C86.3,-25.7,93.4,-10.1,90.5,3.9C87.6,18,74.7,30.5,62.8,42.4C50.9,54.3,40,65.6,26.5,73.4C13,81.2,-3.1,85.5,-18.2,81.4C-33.3,77.3,-47.4,64.8,-59.6,51.3C-71.8,37.8,-82.1,23.3,-85.4,7.4C-88.7,-8.5,-85.1,-25.8,-75.4,-39.5C-65.7,-53.2,-49.9,-63.3,-34.5,-69.1C-19.1,-74.9,-4.1,-76.4,11.2,-78.3C26.5,-80.2,42.5,-82.5,45.7,-76.3Z" transform="translate(100 100) scale(1.1)" />
        </svg>
        <!-- Bottom Right Floral/Abstract -->
        <svg class="absolute -bottom-20 -right-20 w-80 h-80" style="color: #8A9A5B;" viewBox="0 0 200 200" fill="currentColor">
          <path d="M51.9,-70.5C64.7,-60.8,70.8,-42.6,76.5,-24.5C82.2,-6.4,87.5,11.6,81.4,26.4C75.3,41.2,57.8,52.8,40.7,62.3C23.6,71.8,6.9,79.2,-9.5,79.8C-25.9,80.4,-41.9,74.2,-55.1,62.7C-68.3,51.2,-78.6,34.4,-81.9,16.5C-85.2,-1.4,-81.5,-20.4,-72,-36.1C-62.5,-51.8,-47.2,-64.2,-31.4,-72.1C-15.6,-80,0.7,-83.4,17.7,-80.5C34.7,-77.6,52.4,-68.4,51.9,-70.5Z" transform="translate(100 100) scale(1)" />
        </svg>
      </div>

      <!-- Main Content Container -->
      <main class="w-full max-w-4xl px-6 py-16 md:py-24 z-10 flex-grow flex flex-col items-center text-center">
        
        <!-- Header Section -->
        <header class="mb-16">
          <p class="font-script text-4xl md:text-5xl mb-4" style="color: #8A9A5B;">Zarezerwujcie Datę</p>
          <h1 class="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-wide">
            Weronika & Radosław
          </h1>
          <div class="flex items-center justify-center space-x-4 mb-8">
            <div class="h-px w-12 md:w-24" style="background-color: #8A9A5B;"></div>
            <p class="text-xl md:text-2xl tracking-[0.2em] font-light uppercase">12.07.2026 • 14:00</p>
            <div class="h-px w-12 md:w-24" style="background-color: #8A9A5B;"></div>
          </div>
          <p class="text-lg md:text-xl font-light italic opacity-80 max-w-2xl mx-auto">
            Nie możemy się doczekać, aby wspólnie z Wami świętować początek naszego nowego rozdziału.
          </p>
        </header>

        <!-- Countdown Timer -->
        <section class="mb-20 w-full max-w-2xl">
          <div class="grid grid-cols-4 gap-3 md:gap-6">
            <div class="flex flex-col items-center p-4 rounded-xl shadow-sm" style="background-color: rgba(255,255,255,0.6); border: 1px solid rgba(138, 154, 91, 0.2);">
              <span class="font-serif text-3xl md:text-5xl font-semibold">{{ padZero(days()) }}</span>
              <span class="text-xs md:text-sm tracking-widest uppercase mt-2 opacity-70">Dni</span>
            </div>
            <div class="flex flex-col items-center p-4 rounded-xl shadow-sm" style="background-color: rgba(255,255,255,0.6); border: 1px solid rgba(138, 154, 91, 0.2);">
              <span class="font-serif text-3xl md:text-5xl font-semibold">{{ padZero(hours()) }}</span>
              <span class="text-xs md:text-sm tracking-widest uppercase mt-2 opacity-70">Godzin</span>
            </div>
            <div class="flex flex-col items-center p-4 rounded-xl shadow-sm" style="background-color: rgba(255,255,255,0.6); border: 1px solid rgba(138, 154, 91, 0.2);">
              <span class="font-serif text-3xl md:text-5xl font-semibold">{{ padZero(minutes()) }}</span>
              <span class="text-xs md:text-sm tracking-widest uppercase mt-2 opacity-70">Minut</span>
            </div>
            <div class="flex flex-col items-center p-4 rounded-xl shadow-sm" style="background-color: rgba(255,255,255,0.6); border: 1px solid rgba(138, 154, 91, 0.2);">
              <span class="font-serif text-3xl md:text-5xl font-semibold">{{ padZero(seconds()) }}</span>
              <span class="text-xs md:text-sm tracking-widest uppercase mt-2 opacity-70">Sekund</span>
            </div>
          </div>
        </section>

        <!-- Locations Section -->
        <section class="w-full grid md:grid-cols-2 gap-8 mb-20">
          
          <!-- Church -->
          <div class="flex flex-col items-center p-8 rounded-2xl transition-transform hover:-translate-y-1 duration-300" style="background-color: white; box-shadow: 0 10px 30px -10px rgba(44, 62, 80, 0.05);">
            <div class="w-16 h-16 rounded-full flex items-center justify-center mb-6" style="background-color: rgba(138, 154, 91, 0.1); color: #8A9A5B;">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"/>
                <circle cx="12" cy="8" r="2"/>
                <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"/>
              </svg>
            </div>
            <h2 class="font-serif text-3xl font-semibold mb-2">Ceremonia</h2>
            <p class="mb-6 opacity-80 leading-relaxed max-w-xs">
              Kościół pw. Najświętszego Serca Pana Jezusa<br>
              Niedźwiada 124A<br>
              Rozpoczęcie o 14:00
            </p>
            <a href="https://maps.app.goo.gl/F1zMCRXxumnHf55x8" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center justify-center px-8 py-3 rounded-full font-medium transition-all hover:opacity-90 hover:shadow-md"
               style="background-color: #6B8EAC; color: #FFFFFF;">
               Mapa Dojazdu
            </a>
          </div>

          <!-- Party -->
          <div class="flex flex-col items-center p-8 rounded-2xl transition-transform hover:-translate-y-1 duration-300" style="background-color: white; box-shadow: 0 10px 30px -10px rgba(44, 62, 80, 0.05);">
            <div class="w-16 h-16 rounded-full flex items-center justify-center mb-6" style="background-color: rgba(138, 154, 91, 0.1); color: #8A9A5B;">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2v20"/>
                <path d="m4 6 16 12"/>
                <path d="m4 18 16-12"/>
                <path d="M22 12A10 10 0 1 1 2 12a10 10 0 0 1 20 0Z"/>
              </svg>
            </div>
            <h2 class="font-serif text-3xl font-semibold mb-2">Przyjęcie Weselne</h2>
            <p class="mb-6 opacity-80 leading-relaxed max-w-xs">
              Siedlisko Janczar<br>
              Pstrągowa 815<br>
              Zaraz po ceremonii
            </p>
            <a href="https://maps.app.goo.gl/q5ZmiyhVWomZ9LyJ7" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center justify-center px-8 py-3 rounded-full font-medium transition-all hover:opacity-90 hover:shadow-md"
               style="background-color: #6B8EAC; color: #FFFFFF;">
               Mapa Dojazdu
            </a>
          </div>

        </section>

        <!-- RSVP Section -->
        <section class="w-full max-w-3xl p-10 md:p-14 rounded-3xl relative overflow-hidden" style="background-color: #2C3E50; color: #f9f7f2;">
          <!-- decorative overlay -->
          <svg class="absolute top-0 right-0 opacity-10 pointer-events-none" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
            <path d="M2 12H22"/>
            <path d="M12 2V22"/>
          </svg>
          
          <div class="relative z-10">
            <h2 class="font-serif text-4xl md:text-5xl font-semibold mb-4">Czy będziecie z nami?</h2>
            <p class="text-lg opacity-90 mb-8 max-w-lg mx-auto font-light">
              Prosimy o potwierdzenie przybycia, abyśmy mogli odpowiednio przygotować się na ten wspaniały dzień.
            </p>
            
            <div class="flex flex-col items-center gap-4">
              <a href="https://tally.so/r/VLYZBv" target="_blank" 
                 class="inline-flex items-center justify-center px-10 py-4 rounded-full font-medium text-lg transition-all hover:scale-105"
                 style="background-color: #f9f7f2; color: #2C3E50;">
                 Potwierdź przybycie
              </a>

            </div>
          </div>
        </section>

      </main>

      <!-- Footer -->
      <footer class="w-full py-8 text-center z-10 opacity-70">
        <p class="font-serif italic">&copy; 2026 Weronika i Radosław. Wszelkie prawa zastrzeżone.</p>
        <p class="text-xs mt-2 tracking-widest uppercase">Do zobaczenia!</p>
      </footer>

    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500&family=Pinyon+Script&display=swap');

    .font-serif {
      font-family: 'Cormorant Garamond', serif;
    }
    .font-sans {
      font-family: 'Montserrat', sans-serif;
    }
    .font-script {
      font-family: 'Pinyon Script', cursive;
    }
    
    ::selection {
      background-color: #8A9A5B;
      color: #FFFFFF;
    }
  `]
})
export class App implements OnInit, OnDestroy {
  // Target date: 12.07.2026 14:00 (July 12, 2026 at 2:00 PM)
  private readonly targetDate = new Date('2026-07-12T14:00:00').getTime();
  private timerInterval: any;

  // Signals for countdown state
  days = signal(0);
  hours = signal(0);
  minutes = signal(0);
  seconds = signal(0);

  ngOnInit() {
    this.updateCountdown();
    this.timerInterval = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  private updateCountdown() {
    const now = new Date().getTime();
    const distance = this.targetDate - now;

    if (distance < 0) {
      // Date has passed
      this.days.set(0);
      this.hours.set(0);
      this.minutes.set(0);
      this.seconds.set(0);
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
      }
      return;
    }

    this.days.set(Math.floor(distance / (1000 * 60 * 60 * 24)));
    this.hours.set(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    this.minutes.set(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    this.seconds.set(Math.floor((distance % (1000 * 60)) / 1000));
  }

  padZero(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }
}