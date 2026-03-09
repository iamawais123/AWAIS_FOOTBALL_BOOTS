# Image Setup Guide for AWAIS Football Website

## 📁 Assets Folder Structure

Your assets folder is located at:
```
src/assets/
├── README.md
├── collections/
│   ├── speed-series.jpg
│   ├── control-series.jpg
│   ├── striker-series.jpg
│   └── street-football.jpg
├── hero/
│   └── hero-main.jpg
└── products/
    ├── awais-speed-pro-x-1.jpg
    ├── awais-speed-pro-x-1-alt.jpg
    ├── nike-speed-elite-1.jpg
    ├── nike-speed-elite-1-alt.jpg
    └── ... (200+ product images)
```

## 🖼️ Required Images

### 1. Hero Section (1 image)
- **Path**: `/assets/hero/hero-main.jpg`
- **Recommended size**: 1920x1080px
- **Format**: JPG or PNG
- **Content**: High-quality hero image of premium football boots

### 2. Collection Banners (4 images)
- **Path**: `/assets/collections/`
- **Recommended size**: 1200x800px
- **Images needed**:
  - `speed-series.jpg` - Speed boots showcase
  - `control-series.jpg` - Control boots showcase
  - `striker-series.jpg` - Power/striker boots showcase
  - `street-football.jpg` - Street football boots showcase

### 3. Product Images (400+ images)
- **Path**: `/assets/products/`
- **Recommended size**: 800x800px
- **Format**: JPG or PNG
- **Naming convention**: `{brand}-{model-name}-{variant}.jpg`

## 📝 Image Naming Convention

### Product Images
Each product needs 2 images:
1. **Main image**: `{brand}-{model}-{number}.jpg`
2. **Hover image**: `{brand}-{model}-{number}-alt.jpg`

**Examples**:
- `awais-speed-pro-x-1.jpg` (main)
- `awais-speed-pro-x-1-alt.jpg` (hover)
- `nike-speed-elite-2.jpg` (main)
- `nike-speed-elite-2-alt.jpg` (hover)
- `adidas-control-master-3.jpg` (main)
- `adidas-control-master-3-alt.jpg` (hover)

### Brand Names (lowercase)
- awais
- nike
- adidas
- puma
- under-armour
- mizuno
- new-balance
- umbro
- diadora
- lotto

### Model Names (lowercase with hyphens)
- speed-pro-x
- speed-elite
- speed-ultra
- speed-max
- speed-legend
- control-master
- control-elite
- control-pro
- control-strike
- control-vision
- power-force
- power-strike
- power-elite
- power-max
- power-dominator
- street-legend
- street-pro
- street-elite
- street-max
- street-force
- indoor-pro
- indoor-elite
- indoor-max
- indoor-legend
- indoor-strike
- turf-master
- turf-elite
- turf-pro
- turf-max
- turf-legend

## 🎯 How to Add Images

### Step 1: Organize Your Images
1. Create folders if they don't exist:
   - `src/assets/hero/`
   - `src/assets/collections/`
   - `src/assets/products/`

### Step 2: Add Hero Image
Place your hero image at:
```
src/assets/hero/hero-main.jpg
```

### Step 3: Add Collection Images
Place collection images at:
```
src/assets/collections/speed-series.jpg
src/assets/collections/control-series.jpg
src/assets/collections/striker-series.jpg
src/assets/collections/street-football.jpg
```

### Step 4: Add Product Images
For each of your 200+ products, add 2 images:
```
src/assets/products/awais-speed-pro-x-1.jpg
src/assets/products/awais-speed-pro-x-1-alt.jpg
src/assets/products/nike-speed-elite-1.jpg
src/assets/products/nike-speed-elite-1-alt.jpg
... (continue for all products)
```

## 📊 Complete Product List

You need images for these combinations:

### AWAIS (30 models × 4 variants = 120 products)
- awais-speed-pro-x-[1-4].jpg
- awais-speed-elite-[1-4].jpg
- awais-speed-ultra-[1-4].jpg
- awais-speed-max-[1-4].jpg
- awais-speed-legend-[1-4].jpg
- awais-control-master-[1-4].jpg
- awais-control-elite-[1-4].jpg
- awais-control-pro-[1-4].jpg
- awais-control-strike-[1-4].jpg
- awais-control-vision-[1-4].jpg
- awais-power-force-[1-4].jpg
- awais-power-strike-[1-4].jpg
- awais-power-elite-[1-4].jpg
- awais-power-max-[1-4].jpg
- awais-power-dominator-[1-4].jpg
- awais-street-legend-[1-4].jpg
- awais-street-pro-[1-4].jpg
- awais-street-elite-[1-4].jpg
- awais-street-max-[1-4].jpg
- awais-street-force-[1-4].jpg
- awais-indoor-pro-[1-4].jpg
- awais-indoor-elite-[1-4].jpg
- awais-indoor-max-[1-4].jpg
- awais-indoor-legend-[1-4].jpg
- awais-indoor-strike-[1-4].jpg
- awais-turf-master-[1-4].jpg
- awais-turf-elite-[1-4].jpg
- awais-turf-pro-[1-4].jpg
- awais-turf-max-[1-4].jpg
- awais-turf-legend-[1-4].jpg

### Nike (30 models × 4 variants = 120 products)
Same pattern with `nike-` prefix

### Adidas (30 models × 4 variants = 120 products)
Same pattern with `adidas-` prefix

### Puma (30 models × 4 variants = 120 products)
Same pattern with `puma-` prefix

### Under Armour (30 models × 4 variants = 120 products)
Same pattern with `under-armour-` prefix

### Mizuno (30 models × 4 variants = 120 products)
Same pattern with `mizuno-` prefix

### New Balance (30 models × 4 variants = 120 products)
Same pattern with `new-balance-` prefix

### Umbro (30 models × 4 variants = 120 products)
Same pattern with `umbro-` prefix

### Diadora (30 models × 4 variants = 120 products)
Same pattern with `diadora-` prefix

### Lotto (30 models × 4 variants = 120 products)
Same pattern with `lotto-` prefix

**Total: 400+ product images (200 products × 2 images each)**

## 💡 Tips for Best Results

1. **Image Quality**: Use high-resolution images (at least 800x800px)
2. **File Size**: Optimize images to keep file sizes under 500KB
3. **Consistency**: Use consistent lighting and backgrounds for product images
4. **Alt Images**: Make hover images show different angles or color variations
5. **Background**: Use white or transparent backgrounds for products
6. **Format**: JPG for photos, PNG for images with transparency

## 🚀 After Adding Images

Once you've added all your images:
1. Restart the development server
2. Clear browser cache if needed
3. The website will automatically use your local images

## 📧 Need Help?

If you need assistance with image optimization or have questions about the setup, feel free to ask!
