const { Furniture } = require('../models');

const furnitureData = [
    {
        name: "French Coffee Table",
        type: "Tables",
        price: 499.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674517850/Images/lui-peng-8NxTrV6i4WQ-unsplash_bcl1au.jpg"
      },
      {
        name: "Mahogany Coffee Table",
        type: "Tables",
        price: 399.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674517850/Images/lui-peng-8NxTrV6i4WQ-unsplash_bcl1au.jpg"
      },
      {
        name: "Walnut End Table",
        type: "Tables",
        price: 199.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674517850/Images/rumman-amin-GctCfIx8taQ-unsplash_my1dqz.jpg"
      },
      {
        name: "Glass Bar Table",
        type: "Tables",
        price: 149.99, 
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674521711/Images/614OdK-VvSS._AC_SL1500__p82dtj.jpg"
      },
      {
        name: "Espresso Dining Room Table",
        type: "Tables",
        price: 599.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674521851/Images/RYKER01_nrnwcx.webp"
      },
      {
        name: "Poker Table",
        type: "Tables",
        price: 299.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674521969/Images/tournament-dining-and-game-table-in-black_qb13314522_is9dhu.webp"
      },
      {
        name: "Work Table",
        type: "Tables",
        price: 199.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674522022/Images/H-1137-WOOD_c2wrm1.webp"
      },
      {
        name: "Cherry Coffee Table",
        type: "Tables",
        price: 249.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674522354/Images/Clausen_3_Piece_Coffee_Table_Set_csnjlv.webp"
      },
      {
        name: "Work Chair",
        type: "Seating",
        price: 179.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674522930/Images/fully-capisco-chair-era-bloom-white-bg-01_oucjxh.webp"
      },
      {
        name: "Stool",
        type: "Seating",
        price: 24.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674522963/Images/re-image.azureedge_rv6tsd.jpg"
      },
      {
        name: "Leather Recliner",
        type: "Seating",
        price: 349.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674522995/Images/james-roll-arm-leather-recliner-with-nailheads-c_uj3m8p.jpg"
      },
      {
        name: "Gaming Chair",
        type: "Seating",
        price: 299.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674523211/Images/turntable_2020_TT_sw_charcoal_blue_1-min_yjaiwk.webp"
      },
      {
        name: "Espresso Dining Chairs",
        type: "Seating",
        price: 99.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674523345/Images/F2093_cugoyw.jpg"
      },
      {
        name: "Sofa",
        type: "Seating",
        price: 699.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674517833/Images/phillip-goldsberry-fZuleEfeA1Q-unsplash_pxk563.jpg"
      },
      {
        name: "Loveseat",
        type: "Seating",
        price: 399.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674517718/Images/prydumano-design-yOx4oPNUR10-unsplash_s7ueko.png"
      },
      {
        name: "Sectional",
        type: "Seating",
        price: 999.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674523456/Images/products_benchcraft_color_tracling_7260066_34_17-b1_vxvvtu.webp"
      },
      {
        name: "Sleeper Sofa",
        type: "Seating",
        price: 799.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674523497/Images/76612199_2598495236906438_5002399171869671424_o_mmgvht.jpg"
      },
      {
        name: "King Size Bed",
        type: "Sleeping",
        price: 1299.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674517825/Images/kam-idris-WxqrvWtbg2o-unsplash_nj1bdp.jpg"
      },
      {
        name: "Futon",
        type: "Sleeping",
        price: 299.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674523578/Images/630e3b02-55d2-4958-b75f-d640bdf26476.c54b41d458cf89d2f92df908e9717f02_wvlxmg.webp"
      },
      {
        name: "Racecar Bed",
        type: "Sleeping",
        price: 199.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674523650/Images/81tL9FoANUL._SX679__zngipp.jpg"
      },
      {
        name: "Bunk Bed",
        type: "Sleeping",
        price: 249.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674523680/Images/Bolles_Full_Over_Full_Solid_Wood_Standard_Bunk_Bed_by_Harriet_Bee_pjivgm.webp"
      },
      {
        name: "Gaming Bed",
        type: "Sleeping",
        price: 299.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674523707/Images/1200x1200_iokb1f.jpg"
      },
      {
        name: "Hammock",
        type: "Sleeping",
        price: 129.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674523757/Images/Jenkinsburg_Double_Spreader_Bar_Hammock_l5a1r9.webp"
      },
      {
        name: "Bed Frame",
        type: "Sleeping",
        price: 199.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674523789/Images/Blough_14_Steel_Bed_Frame_ymy782.webp"
      },
      {
        name: "Tech Smart Bed with LEDs",
        type: "Sleeping",
        price: 2999.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674523963/Images/Black_1400x_elu1xt.webp"
      },
      {
        name: "Oak Dresser",
        type: "Storage",
        price: 249.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674523996/Images/Shaker_6_-_Drawer_Dresser_nzxvte.webp"
      },
      {
        name: "MDF Bookshelf",
        type: "Storage",
        price: 19.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674525959/Images/3bae00e7-c7fd-42a4-8bac-61310354bf41_1.98e14c6d9cc0b6e6266f191db9858e90_crkanm.jpg"
      },
      {
        name: "Tall Bookshelf",
        type: "Storage",
        price: 199.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674526222/Images/Clintonville_71.25_H_x_29.75_W_Standard_Bookcase_jzktbe.webp"
      },
      {
        name: "Armoire",
        type: "Storage",
        price: 499.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674526278/Images/sausalito-cane-armoire-z_oedloq.jpg"
      },
      {
        name: "Wall Bookshelf",
        type: "Storage",
        price: 149.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674526318/Images/il_794xN.2832168559_50es_d2bvff.webp"
      },
      {
        name: "Storage Bench",
        type: "Storage",
        price: 89.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674526379/Images/tolkning-bench-with-storage-handmade-rattan__1100341_pe866135_s5_xx5gvc.avif"
      },
      {
        name: "Night Stand",
        type: "Storage",
        price: 199.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674526522/Images/margot-raffia-nightstand-205-o_ujxpan.jpg"
      },
      {
        name: "Bar Cart",
        type: "Storage",
        price: 399.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674526585/Images/mid-century-bar-cart-32-o_vek2a1.jpg"
      },
      {
        name: "Bathroom Rug",
        type: "Rugs",
        price: 29.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674526660/Images/4ce678ba-e5be-4dad-8559-1528b894280b.3e29668e602b78cb3c2705c032ae99b4_awcmrs.jpg"
      },
      {
        name: "Living Room Rug",
        type: "Rugs",
        price: 199.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674517841/Images/birmingham-museums-trust-RXCMQFUo9Hk-unsplash_mej5ak.jpg"
      },
      {
        name: "Kitchen Rug",
        type: "Rugs",
        price: 79.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674526771/Images/image_wlcrkz.webp"
      },
      {
        name: "Antique Rug",
        type: "Rugs",
        price: 299.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674517844/Images/ashkan-forouzani-eBwGgqSt1QA-unsplash_ksepgs.jpg"
      },
      {
        name: "Oriental Rug",
        type: "Rugs",
        price: 349.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674517841/Images/elnaz-asadi-R7WQ01ZK9-c-unsplash_ysz6kt.jpg"
      },
      {
        name: "Turkish Rug",
        type: "Rugs",
        price: 2479.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674517841/Images/birmingham-museums-trust-RXCMQFUo9Hk-unsplash_mej5ak.jpg"
      },
      {
        name: "Runner Rug",
        type: "Rugs",
        price: 199.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674517843/Images/elijah-g-g1GrKGXdk2k-unsplash_mjv9aq.jpg"
      },
      {
        name: "Doormat",
        type: "Rugs",
        price: 49.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674526869/Images/61NfD7SKLFL._AC_SL1000__lnzgrz.jpg"
      },
      {
        name: "Gaming Desk",
        type: "Desks",
        price: 299.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674526946/Images/8iMekd1GgsuKN0gT3qjli_cwrtwv.webp"
      },
      {
        name: "Work Desk",
        type: "Desks",
        price: 199.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674517854/Images/the-9th-coworking--MezGpfNBTo-unsplash_nt8wwf.jpg"
      },
      {
        name: "Standing Desk",
        type: "Desks",
        price: 249.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674517854/Images/howard-bouchevereau-Ql4Y26OsEoY-unsplash_c5r7je.jpg"
      },
      {
        name: "Floating Desk",
        type: "Desks",
        price: 279.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674517853/Images/jeffery-ho-TIN_Lh9-Y7g-unsplash_r9uhfx.jpg"
      },
      {
        name: "Telephone Desk",
        type: "Desks",
        price: 229.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674528321/Images/Telephone_Table_ytvake.jpg"
      },
      {
        name: "L Shaped Desk",
        type: "Desks",
        price: 199.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674528485/Images/allyson_park--816253672_417-hoj-lsd-b1_l5k1mo.webp"
      },
      {
        name: "Vanity Desk",
        type: "Desks",
        price: 179.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674528511/Images/Modern-Corner-Makeup-Vanity-Table-with-LED-Lighted-Mirror_-Vanity-Desk-with-5-Drawers-and-Stool_-Piano-Finish_kxibuh.webp"
      },
      {
        name: "Cherry Desk",
        type: "Desks",
        price: 249.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674528667/Images/412902_791x633_00_ufpqdp.jpg"
      },
      {
        name: "Oak Desk",
        type: "Desks",
        price: 279.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674529783/Images/maciedesk-4_1200x1200_nfndmw.webp"
      },
      {
        name: "Burl Desk",
        type: "Desks",
        price: 349.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674529807/Images/110-111180_01_2048x2048_gscplg.webp"
      }
]

const seedFurniture = () => Furniture.bulkCreate(furnitureData);

module.exports = seedFurniture;