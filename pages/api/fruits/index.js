/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const fruits = [
  {
    name: 'bananas',
    image: '/anastasia-eremina-VI2rIoZUrks-unsplash.jpg',
    ammountPer: '100 grams',
    nutrition: {
      Calories: 89,
      'Total Fat': '0.3 g',
      Cholesterol: '0 mg',
      Sodium: '1 mg',
      Potassium: '358 mg',
      'Total Carbohydrate': '23 g',
      Protein: '1.1 g',
    },
  },
  {
    name: 'apples',
    image: '/tuqa-nabi-71JHj_t-kS0-unsplash.jpg',
    ammountPer: '100 grams',
    nutrition: {
      Calories: 52,
      'Total Fat': '0.2 g',
      Cholesterol: '0 mg',
      Sodium: '1 mg',
      Potassium: '107 mg',
      'Total Carbohydrate': '14 g',
      Protein: '0.3 g',
    },
  },
  {
    name: 'strawberries',
    image: '/olga-kudriavtseva-CL26_lT3Ygg-unsplash.jpg',
    ammountPer: '100 grams',
    nutrition: {
      Calories: 33,
      'Total Fat': '0.3 g',
      Cholesterol: '0 mg',
      Sodium: '1 mg',
      Potassium: '153 mg',
      'Total Carbohydrate': '8 g',
      Protein: '0.7 g',
    },
  },
  {
    name: 'grapes',
    image: '/gunter-hoffmann-LYaW8eq3mjs-unsplash.jpg',
    ammountPer: '100 grams',
    nutrition: {
      Calories: 67,
      'Total Fat': '0.4 g',
      Cholesterol: '0 mg',
      Sodium: '2 mg',
      Potassium: '191 mg',
      'Total Carbohydrate': '17 g',
      Protein: '0.6 g',
    },
  },
  {
    name: 'oranges',
    image: '/mae-mu-9002s2VnOAY-unsplash.jpg',
    ammountPer: '100 grams',
    nutrition: {
      Calories: 47,
      'Total Fat': '0.1 g',
      Cholesterol: '0 mg',
      Sodium: '0 mg',
      Potassium: '181 mg',
      'Total Carbohydrate': '12 g',
      Protein: '0.9 g',
    },
  },
  {
    name: 'watermelon',
    image: '/floh-maier-aFUHu9WNO3Q-unsplash.jpg',
    ammountPer: '100 grams',
    nutrition: {
      Calories: 30,
      'Total Fat': '0.2 g',
      Cholesterol: '0 mg',
      Sodium: '1 mg',
      Potassium: '112 mg',
      'Total Carbohydrate': '8 g',
      Protein: '0.6 g',
    },
  },
  {
    name: 'blueberries',
    image: '/davies-designs-studio-34lgO8_OO-o-unsplash.jpg',
    ammountPer: '100 grams',
    nutrition: {
      Calories: 57,
      'Total Fat': '0.3 g',
      Cholesterol: '0 mg',
      Sodium: '1 mg',
      Potassium: '77 mg',
      'Total Carbohydrate': '14 g',
      Protein: '0,7 g',
    },
  },
]

export default function handler(req, res) {
  res.status(200).json({ items: fruits })
}

export { fruits }
