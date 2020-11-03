import { Injectable } from '@angular/core';

const FEED_UPDATES = [
  `Time my favorite, for burritos and beers #BurritoLyfe`,
  `Had my first Soylent today. I\'ve reached peak SF.`,
  `Is it raining for anyone else, or is it just me?`,
  `lmao cats are so funny!`,
  `When I say mizzenmast, what I really mean is larders`,
  `A rolling stone is your oyster`,
  `Taco Bell? More like Taco Cartel, amirite?`,
  `"Um" - 1st horse that got ridden`,
  `The guy at Chipotle couldn\'t close my burrito. He looked up at me. I looked at him. I whispered, "It\'s not your fault." He wept in my
   arms.`,
];

@Injectable({
  providedIn: 'root',
})
export class ContactFeedService {
  constructor() {}

  public getFeed() {
    return FEED_UPDATES;
  }
}
