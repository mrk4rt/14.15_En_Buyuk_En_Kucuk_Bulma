// Rastgele sayılardan oluşan bir dizi oluşturuyoruz.
let sayilarDizisi = [];

// Diziye 10 adet rastgele sayı ekliyoruz. Sayılar 1 ile 100 arasında.
for (let i = 1; i <= 10; i++) {
  //Math.floor() fonksiyonu, verilen sayıyı aşağıya yuvarlar.
  //Math.random() fonksiyonu, 0 (dahil) ile 1 (hariç) arasında rastgele bir sayı döndürür.
  //+1 : Math.random() fonksiyonu ile üretilen sayı aralığı 0 ile 99 arasındadır (0 dahil, 100 hariç).
  sayilarDizisi.push(Math.floor(Math.random() * 100) + 1);
}
console.log("Sayılar Dizisi:", sayilarDizisi);

// En büyük ve en küçük sayıyı bulmak için başlangıçta dizinin ilk elemanını alıyoruz.
let enBuyuk = sayilarDizisi[0];
let enKucuk = sayilarDizisi[0];

// Dizi üzerinde dönerek her bir elemanı kontrol ediyoruz.
for (let i = 1; i < sayilarDizisi.length; i++) {
  // Eğer şu anki sayı, en büyük sayıdan daha büyükse, en büyük sayıyı güncelliyoruz.
  if (sayilarDizisi[i] > enBuyuk) {
    enBuyuk = sayilarDizisi[i];
  }

  // Eğer şu anki sayı, en küçük sayıdan daha küçükse, en küçük sayıyı güncelliyoruz.
  if (sayilarDizisi[i] < enKucuk) {
    enBuyuk = sayilarDizisi[i];
  }
}

// Sonuçları ekrana yazdırıyoruz.
console.log("En Büyük Sayı:", enBuyuk);
console.log("En Küçük Sayı:", enKucuk);
