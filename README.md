# FRUIT MARKET

# Sadržaj

- [Angular sajt](#anuglar-sajt)
  1. [Početna](#početna)
  1. [Kategorije](#kategorije)
  1. [Proizvodi](#proizvodi)
  1. [Korpa](#korpa)
  1. [Naručivanje](#naručivanje)
  1. [O nama](#onama)
- [Firebase baza](#firebase-baza)
  1. [Baza](#baza)

# Angular sajt

Ovaj sajt vrši funkciju online prodavnice. Posetioci sajta imaju mogućnost da pogledaju ponudu prodavnice i da naruče.

Dizajn sajta rađen je u Angular Material. Svi moduli importovani su kroz material.module.ts fajl.

Glavni layout je sastavljen samo od headera koji sadrži linkove. U slučaju manjih ekrana meni se prebacuje u sidenav.

## Početna

<a href="https://ibb.co/sV0r8QN"><img src="https://i.ibb.co/jrcFnGQ/Screenshot-2020-06-18-Fruit-Market.png" alt="Screenshot-2020-06-18-Fruit-Market" border="0"></a>

Početna strana nema nikakvu funkcionalnost, ima samo linkove koji vode ka drugim stranicama sajta.

## Kategorije

<a href="https://ibb.co/CsQxbbV"><img src="https://i.ibb.co/fGHmkkr/Screenshot-2020-06-18-Fruit-Market-2.png" alt="Screenshot-2020-06-18-Fruit-Market-2" border="0"></a>

Kategorije dolaze iz products/products-view foldera. Svaka kategorija je zasebna producs/signel-product komponenta. Dohvatanje kategorija urađeno je implementacijom Category.Service-a. Korišćena je animacija za inicijalno prikazivanje kategorija uz pomoć animation.ts fajla.

## Proizvodi

<a href="https://ibb.co/YQxJnrn"><img src="https://i.ibb.co/02x14w4/Screenshot-2020-06-18-Fruit-Market-3.png" alt="Screenshot-2020-06-18-Fruit-Market-3" border="0"></a>

Proizvodi nalaze se u products/products-by-category. U zavisnosti od izabrane kategorije, putem Products.Service fajla dohvataju se proizvodi te kategorije koji imaju fade animaciju. Oni su svi zasebna single-product komponenta. Sortiranje se vrši preko sort pipe-a, a filtriranje preko filter pipe-a. Klikom na dodavanje u korpu pojaviće se notifikacija u gornjem delu ekrana da je proizvod dodat i brojka pored korpe biće ažurirana.

## Korpa

<a href="https://ibb.co/nwzDVn6"><img src="https://i.ibb.co/VL2vhQJ/Screenshot-2020-06-18-Fruit-Market-4.png" alt="Screenshot-2020-06-18-Fruit-Market-4" border="0"></a>

Korpa ima dosta funkcionalnosti. Rad sa korpom radi se preko Cart.Service-a, koji čuva podatke i u local storage-u. Inicijalno, prikazani su proizvodi već dodati u korpu. Svaki prozivnod može da se količinski uveća ili smanji, a količina je automatski uvećana kada se doda prozivod koji je već u korpi. Ako se broj proizvoda smanji na 0, proizvod će se automatski obrisati. Svaki proizvod ima opciju brisanja koje se vrši uz animaciju. Takođe postoji dugme za brisanje kompletne korpe, a pored njega je link ka naručivanju.

## Naručivanje

<a href="https://ibb.co/xzh9FWB"><img src="https://i.ibb.co/vL1yXpT/Screenshot-2020-06-18-Fruit-Market-5.png" alt="Screenshot-2020-06-18-Fruit-Market-5" border="0"></a>

Posle unetih podataka, proveriće se ispravnost unetih podataka i, ako su svi podaci ispravni, poslaće se u bazu koristeći Checkout.Service.

<a href="https://ibb.co/4pGTGGh"><img src="https://i.ibb.co/njvcvvx/Screenshot-2020-06-18-Fruit-Market-1.png" alt="Screenshot-2020-06-18-Fruit-Market-1" border="0"></a>

Ova stranica sadrži mapu i linkove ka GitHub(dokumentaciji) i LinkedIn profilu autora.

# Firebase baza

## Baza

Baza se sastoji od 3 kolekcije: categories, products i orders.
