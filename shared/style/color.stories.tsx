import type { Meta, StoryObj } from '@storybook/react'

import { PropsWithChildren, ReactNode } from 'react'

const meta: Meta = {
  title: 'style/color',
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="flex h-fit w-[1140px]">
        <Story />
      </div>
    ),
  ],
}
export default meta

const Primitive: StoryObj = {
  render: () => {
    return (
      <div className="flex w-full flex-col">
        {/* header */}
        <div className="flex w-full flex-col gap-[2rem] bg-black px-[3.125rem] py-[2.8125rem]">
          <div className="flex items-start justify-between">
            <h1 className="text-[35px] leading-[40px] font-extrabold text-white not-italic">
              Primitive Color
            </h1>
            <h2 className="font-suit text-[12px] leading-[35px] font-[400] text-[#A6A6A6] not-italic">
              OHMO Design Library
            </h2>
          </div>
          <div className="font-suit text-[12px] leading-[16px] font-[400] whitespace-pre-line text-[#A6A6A6] not-italic">
            Primitive colors are the core tokens used to build semantic color scales. <br />
            They enable scalable theming and maintain visual harmony across the system.
          </div>
        </div>

        {/* content */}
        <div className="flex w-full flex-col gap-[3.125rem] px-[3.125rem] pt-[3.75rem] pb-[4.84375rem]">
          <section className="flex h-fit w-full flex-col gap-[1.25rem]">
            <ColorCategoryTag label="Base" />
            <ColorTable>
              <ColorTable.TableHeader />
              <ColorTable.TableBody
                value="#FFFFFF"
                token="White"
                tokenPreview={
                  <div className="aspect-square w-[12px] rounded-full border border-black bg-white" />
                }
              />
              <ColorTable.TableBody
                value="#000000"
                token="Black"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-black" />}
              />
            </ColorTable>
          </section>

          <section className="flex h-fit w-full flex-col gap-[1.25rem]">
            <ColorCategoryTag label="Neutral" />
            <ColorTable>
              <ColorTable.TableHeader />
              <ColorTable.TableBody
                value="#F7F7FA"
                token="Neutral/50"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-neutral-50" />}
              />
              <ColorTable.TableBody
                value="#F9F9FB"
                token="Neutral/100"
                tokenPreview={
                  <div className="aspect-square w-[12px] rounded-full bg-neutral-100" />
                }
              />
              <ColorTable.TableBody
                value="#F6F6F9"
                token="Neutral/150"
                tokenPreview={
                  <div className="bg-neutral-150 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#F3F3F7"
                token="Neutral/200"
                tokenPreview={
                  <div className="aspect-square w-[12px] rounded-full bg-neutral-200" />
                }
              />
              <ColorTable.TableBody
                value="#F0F0F5"
                token="Neutral/250"
                tokenPreview={
                  <div className="bg-neutral-250 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#EEEFF2"
                token="Neutral/300"
                tokenPreview={
                  <div className="aspect-square w-[12px] rounded-full bg-neutral-300" />
                }
              />
              <ColorTable.TableBody
                value="#E8E8ED"
                token="Neutral/350"
                tokenPreview={
                  <div className="bg-neutral-350 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#E0E0E6"
                token="Neutral/400"
                tokenPreview={
                  <div className="aspect-square w-[12px] rounded-full bg-neutral-400" />
                }
              />
              <ColorTable.TableBody
                value="#D7D7DF"
                token="Neutral/450"
                tokenPreview={
                  <div className="bg-neutral-450 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#CDCDD6"
                token="Neutral/500"
                tokenPreview={
                  <div className="aspect-square w-[12px] rounded-full bg-neutral-500" />
                }
              />
              <ColorTable.TableBody
                value="#C1C1CD"
                token="Neutral/550"
                tokenPreview={
                  <div className="bg-neutral-550 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#ADADBD"
                token="Neutral/600"
                tokenPreview={
                  <div className="aspect-square w-[12px] rounded-full bg-neutral-600" />
                }
              />
              <ColorTable.TableBody
                value="#9797AB"
                token="Neutral/650"
                tokenPreview={
                  <div className="bg-neutral-650 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#777792"
                token="Neutral/700"
                tokenPreview={
                  <div className="aspect-square w-[12px] rounded-full bg-neutral-700" />
                }
              />
              <ColorTable.TableBody
                value="#59596E"
                token="Neutral/750"
                tokenPreview={
                  <div className="bg-neutral-750 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#3B3B49"
                token="Neutral/800"
                tokenPreview={
                  <div className="aspect-square w-[12px] rounded-full bg-neutral-800" />
                }
              />
              <ColorTable.TableBody
                value="#3B3B49"
                token="Neutral/850"
                tokenPreview={
                  <div className="bg-neutral-850 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#19191F"
                token="Neutral/900"
                tokenPreview={
                  <div className="aspect-square w-[12px] rounded-full bg-neutral-900" />
                }
              />
              <ColorTable.TableBody
                value="#101014"
                token="Neutral/950"
                tokenPreview={
                  <div className="aspect-square w-[12px] rounded-full bg-neutral-950" />
                }
              />
            </ColorTable>
          </section>

          <section className="flex h-fit w-full flex-col gap-[1.25rem]">
            <ColorCategoryTag label="Blue" />
            <ColorTable>
              <ColorTable.TableHeader />
              <ColorTable.TableBody
                value="#F5F5FF"
                token="Blue/50"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-blue-50" />}
              />
              <ColorTable.TableBody
                value="#EBECFF"
                token="Blue/100"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-blue-100" />}
              />
              <ColorTable.TableBody
                value="#DEE0FF"
                token="Blue/200"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-blue-200" />}
              />
              <ColorTable.TableBody
                value="#B0B5FF"
                token="Blue/300"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-blue-300" />}
              />
              <ColorTable.TableBody
                value="#A3A9FF"
                token="Blue/400"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-blue-400" />}
              />
              <ColorTable.TableBody
                value="#858DFF"
                token="Blue/500"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-blue-500" />}
              />
              <ColorTable.TableBody
                value="#757EFF"
                token="Blue/600"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-blue-600" />}
              />
              <ColorTable.TableBody
                value="#5762FF"
                token="Blue/700"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-blue-700" />}
              />
              <ColorTable.TableBody
                value="#4A56FF"
                token="Blue/800"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-blue-800" />}
              />
              <ColorTable.TableBody
                value="#2E3CFF"
                token="Blue/900"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-blue-900" />}
              />
            </ColorTable>
          </section>

          <section className="flex h-fit w-full flex-col gap-[1.25rem]">
            <ColorCategoryTag label="Skyblue" />
            <ColorTable>
              <ColorTable.TableHeader />
              <ColorTable.TableBody
                value="#F8FDFF"
                token="Skyblue/50"
                tokenPreview={<div className="bg-skyblue-50 aspect-square w-[12px] rounded-full" />}
              />
              <ColorTable.TableBody
                value="#F2FBFF"
                token="Skyblue/100"
                tokenPreview={
                  <div className="bg-skyblue-100 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#D6F4FF"
                token="Skyblue/200"
                tokenPreview={
                  <div className="bg-skyblue-200 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#CCF1FF"
                token="Skyblue/300"
                tokenPreview={
                  <div className="bg-skyblue-300 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#C4EFFF"
                token="Skyblue/400"
                tokenPreview={
                  <div className="bg-skyblue-400 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#B0E9FF"
                token="Skyblue/500"
                tokenPreview={
                  <div className="bg-skyblue-500 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#92E1FF"
                token="Skyblue/600"
                tokenPreview={
                  <div className="bg-skyblue-600 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#80DCFF"
                token="Skyblue/700"
                tokenPreview={
                  <div className="bg-skyblue-700 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#6CD7FF"
                token="Skyblue/800"
                tokenPreview={
                  <div className="bg-skyblue-800 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#5AD2FF"
                token="Skyblue/900"
                tokenPreview={
                  <div className="bg-skyblue-900 aspect-square w-[12px] rounded-full" />
                }
              />
            </ColorTable>
          </section>

          <section className="flex h-fit w-full flex-col gap-[1.25rem]">
            <ColorCategoryTag label="Purple" />
            <ColorTable>
              <ColorTable.TableHeader />
              <ColorTable.TableBody
                value="#F9F6FF"
                token="Purple/50"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-purple-50" />}
              />
              <ColorTable.TableBody
                value="#F3EDFF"
                token="Purple/100"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-purple-100" />}
              />
              <ColorTable.TableBody
                value="#EBE2FF"
                token="Purple/200"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-purple-200" />}
              />
              <ColorTable.TableBody
                value="#D0BAFF"
                token="Purple/300"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-purple-300" />}
              />
              <ColorTable.TableBody
                value="#BA9AFF"
                token="Purple/400"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-purple-400" />}
              />
              <ColorTable.TableBody
                value="#B694FF"
                token="Purple/500"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-purple-500" />}
              />
              <ColorTable.TableBody
                value="#AC87FF"
                token="Purple/600"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-purple-600" />}
              />
              <ColorTable.TableBody
                value="#9A6CFF"
                token="Purple/700"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-purple-700" />}
              />
              <ColorTable.TableBody
                value="#8953FF"
                token="Purple/800"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-purple-800" />}
              />
              <ColorTable.TableBody
                value="#6620FF"
                token="Purple/900"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-purple-900" />}
              />
            </ColorTable>
          </section>

          <section className="flex h-fit w-full flex-col gap-[1.25rem]">
            <ColorCategoryTag label="Orchid" />
            <ColorTable>
              <ColorTable.TableHeader />
              <ColorTable.TableBody
                value="#FCF9FF"
                token="Orchid/50"
                tokenPreview={<div className="bg-orchid-50 aspect-square w-[12px] rounded-full" />}
              />
              <ColorTable.TableBody
                value="#FAF3FE"
                token="Orchid/100"
                tokenPreview={<div className="bg-orchid-100 aspect-square w-[12px] rounded-full" />}
              />
              <ColorTable.TableBody
                value="#F6ECFE"
                token="Orchid/200"
                tokenPreview={<div className="bg-orchid-200 aspect-square w-[12px] rounded-full" />}
              />
              <ColorTable.TableBody
                value="#EFDAFD"
                token="Orchid/300"
                tokenPreview={<div className="bg-orchid-300 aspect-square w-[12px] rounded-full" />}
              />
              <ColorTable.TableBody
                value="#E7C9FC"
                token="Orchid/400"
                tokenPreview={<div className="bg-orchid-400 aspect-square w-[12px] rounded-full" />}
              />
              <ColorTable.TableBody
                value="#DFB7FB"
                token="Orchid/500"
                tokenPreview={<div className="bg-orchid-500 aspect-square w-[12px] rounded-full" />}
              />
              <ColorTable.TableBody
                value="#DBAEFA"
                token="Orchid/600"
                tokenPreview={<div className="bg-orchid-600 aspect-square w-[12px] rounded-full" />}
              />
              <ColorTable.TableBody
                value="#D39CF9"
                token="Orchid/700"
                tokenPreview={<div className="bg-orchid-700 aspect-square w-[12px] rounded-full" />}
              />
              <ColorTable.TableBody
                value="#C984F8"
                token="Orchid/800"
                tokenPreview={<div className="bg-orchid-800 aspect-square w-[12px] rounded-full" />}
              />
              <ColorTable.TableBody
                value="#BD69F6"
                token="Orchid/900"
                tokenPreview={<div className="bg-orchid-900 aspect-square w-[12px] rounded-full" />}
              />
            </ColorTable>
          </section>

          <section className="flex h-fit w-full flex-col gap-[1.25rem]">
            <ColorCategoryTag label="Mint" />
            <ColorTable>
              <ColorTable.TableHeader />
              <ColorTable.TableBody
                value="#DBFFFC"
                token="Mint/50"
                tokenPreview={<div className="bg-mint-50 aspect-square w-[12px] rounded-full" />}
              />
              <ColorTable.TableBody
                value="#BAFFFA"
                token="Mint/100"
                tokenPreview={<div className="bg-mint-100 aspect-square w-[12px] rounded-full" />}
              />
              <ColorTable.TableBody
                value="#94FFF8"
                token="Mint/200"
                tokenPreview={<div className="bg-mint-200 aspect-square w-[12px] rounded-full" />}
              />
              <ColorTable.TableBody
                value="#56FCF3"
                token="Mint/300"
                tokenPreview={<div className="bg-mint-300 aspect-square w-[12px] rounded-full" />}
              />
              <ColorTable.TableBody
                value="#4DF5ED"
                token="Mint/400"
                tokenPreview={<div className="bg-mint-400 aspect-square w-[12px] rounded-full" />}
              />
              <ColorTable.TableBody
                value="#39E8E0"
                token="Mint/500"
                tokenPreview={<div className="bg-mint-500 aspect-square w-[12px] rounded-full" />}
              />
              <ColorTable.TableBody
                value="#2DE1D9"
                token="Mint/600"
                tokenPreview={<div className="bg-mint-600 aspect-square w-[12px] rounded-full" />}
              />
              <ColorTable.TableBody
                value="#01D4CC"
                token="Mint/700"
                tokenPreview={<div className="bg-mint-700 aspect-square w-[12px] rounded-full" />}
              />
              <ColorTable.TableBody
                value="#00C6BE"
                token="Mint/800"
                tokenPreview={<div className="bg-mint-800 aspect-square w-[12px] rounded-full" />}
              />
              <ColorTable.TableBody
                value="#00B8B1"
                token="Mint/900"
                tokenPreview={<div className="bg-mint-900 aspect-square w-[12px] rounded-full" />}
              />
            </ColorTable>
          </section>

          <section className="flex h-fit w-full flex-col gap-[1.25rem]">
            <ColorCategoryTag label="Green" />
            <ColorTable>
              <ColorTable.TableHeader />
              <ColorTable.TableBody
                value="#E7FEF8"
                token="Green/50"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-green-50" />}
              />
              <ColorTable.TableBody
                value="#CBFFF3"
                token="Green/100"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-green-100" />}
              />
              <ColorTable.TableBody
                value="#AFFFEC"
                token="Green/200"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-green-200" />}
              />
              <ColorTable.TableBody
                value="#86FFE3"
                token="Green/300"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-green-300" />}
              />
              <ColorTable.TableBody
                value="#5AFFD9"
                token="Green/400"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-green-400" />}
              />
              <ColorTable.TableBody
                value="#3FFFD2"
                token="Green/500"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-green-500" />}
              />
              <ColorTable.TableBody
                value="#0DFFC7"
                token="Green/600"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-green-600" />}
              />
              <ColorTable.TableBody
                value="#00F5BC"
                token="Green/700"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-green-700" />}
              />
              <ColorTable.TableBody
                value="#00E3AE"
                token="Green/800"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-green-800" />}
              />
              <ColorTable.TableBody
                value="#00D9A6"
                token="Green/900"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-green-900" />}
              />
            </ColorTable>
          </section>

          <section className="flex h-fit w-full flex-col gap-[1.25rem]">
            <ColorCategoryTag label="Yellow" />
            <ColorTable>
              <ColorTable.TableHeader />
              <ColorTable.TableBody
                value="#FFFBEB"
                token="Yellow/50"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-yellow-50" />}
              />
              <ColorTable.TableBody
                value="#FFF9DE"
                token="Yellow/100"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-yellow-100" />}
              />
              <ColorTable.TableBody
                value="#FFF2B5"
                token="Yellow/200"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-yellow-200" />}
              />
              <ColorTable.TableBody
                value="#FFEFA3"
                token="Yellow/300"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-yellow-300" />}
              />
              <ColorTable.TableBody
                value="#FFE985"
                token="Yellow/400"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-yellow-400" />}
              />
              <ColorTable.TableBody
                value="#FFE775"
                token="Yellow/500"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-yellow-500" />}
              />
              <ColorTable.TableBody
                value="#FFE157"
                token="Yellow/600"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-yellow-600" />}
              />
              <ColorTable.TableBody
                value="#FFDC3B"
                token="Yellow/700"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-yellow-700" />}
              />
              <ColorTable.TableBody
                value="#FFD71C"
                token="Yellow/800"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-yellow-800" />}
              />
              <ColorTable.TableBody
                value="#FFD200"
                token="Yellow/900"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-yellow-900" />}
              />
            </ColorTable>
          </section>

          <section className="flex h-fit w-full flex-col gap-[1.25rem]">
            <ColorCategoryTag label="Red" />
            <ColorTable>
              <ColorTable.TableHeader />
              <ColorTable.TableBody
                value="#FFE1DF"
                token="Red/50"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-red-50" />}
              />
              <ColorTable.TableBody
                value="#FFD3CF"
                token="Red/100"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-red-100" />}
              />
              <ColorTable.TableBody
                value="#FFC4BE"
                token="Red/200"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-red-200" />}
              />
              <ColorTable.TableBody
                value="#FFB5AE"
                token="Red/300"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-red-300" />}
              />
              <ColorTable.TableBody
                value="#FFA69E"
                token="Red/400"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-red-400" />}
              />
              <ColorTable.TableBody
                value="#FF978E"
                token="Red/500"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-red-500" />}
              />
              <ColorTable.TableBody
                value="#FF897E"
                token="Red/600"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-red-600" />}
              />
              <ColorTable.TableBody
                value="#FF6B5E"
                token="Red/700"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-red-700" />}
              />
              <ColorTable.TableBody
                value="#F55041"
                token="Red/800"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-red-800" />}
              />
              <ColorTable.TableBody
                value="#E43B2C"
                token="Red/900"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-red-900" />}
              />
            </ColorTable>
          </section>

          <section className="flex h-fit w-full flex-col gap-[1.25rem]">
            <ColorCategoryTag label="Pink" />
            <ColorTable>
              <ColorTable.TableHeader />
              <ColorTable.TableBody
                value="#FFF8FA"
                token="Pink/50"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-pink-50" />}
              />
              <ColorTable.TableBody
                value="#FFF1F6"
                token="Pink/100"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-pink-100" />}
              />
              <ColorTable.TableBody
                value="#FFE8F0"
                token="Pink/200"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-pink-200" />}
              />
              <ColorTable.TableBody
                value="#FFD4E2"
                token="Pink/300"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-pink-300" />}
              />
              <ColorTable.TableBody
                value="#FFB6CE"
                token="Pink/400"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-pink-400" />}
              />
              <ColorTable.TableBody
                value="#FFA1C0"
                token="Pink/500"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-pink-500" />}
              />
              <ColorTable.TableBody
                value="#FF8CB2"
                token="Pink/600"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-pink-600" />}
              />
              <ColorTable.TableBody
                value="#FF79A6"
                token="Pink/700"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-pink-700" />}
              />
              <ColorTable.TableBody
                value="#FF6498"
                token="Pink/800"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-pink-800" />}
              />
              <ColorTable.TableBody
                value="#FF518B"
                token="Pink/900"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-pink-900" />}
              />
            </ColorTable>
          </section>

          <section className="flex h-fit w-full flex-col gap-[1.25rem]">
            <ColorCategoryTag label="Orange" />
            <ColorTable>
              <ColorTable.TableHeader />
              <ColorTable.TableBody
                value="#FFF6EE"
                token="Orange/50"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-orange-50" />}
              />
              <ColorTable.TableBody
                value="#FFF0E4"
                token="Orange/100"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-orange-100" />}
              />
              <ColorTable.TableBody
                value="#FFDABE"
                token="Orange/200"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-orange-200" />}
              />
              <ColorTable.TableBody
                value="#FFD5B4"
                token="Orange/300"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-orange-300" />}
              />
              <ColorTable.TableBody
                value="#FFC69B"
                token="Orange/400"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-orange-400" />}
              />
              <ColorTable.TableBody
                value="#FFBF8E"
                token="Orange/500"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-orange-500" />}
              />
              <ColorTable.TableBody
                value="#FFB175"
                token="Orange/600"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-orange-600" />}
              />
              <ColorTable.TableBody
                value="#FFA45E"
                token="Orange/700"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-orange-700" />}
              />
              <ColorTable.TableBody
                value="#FF9645"
                token="Orange/800"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-orange-800" />}
              />
              <ColorTable.TableBody
                value="#FF892E"
                token="Orange/900"
                tokenPreview={<div className="aspect-square w-[12px] rounded-full bg-orange-900" />}
              />
            </ColorTable>
          </section>

          <section className="flex h-fit w-full flex-col gap-[1.25rem]">
            <ColorCategoryTag label="Lightgreen" />
            <ColorTable>
              <ColorTable.TableHeader />
              <ColorTable.TableBody
                value="#F9FEF6"
                token="Lightgreen/50"
                tokenPreview={
                  <div className="bg-lightgreen-50 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#ECFBE3"
                token="Lightgreen/100"
                tokenPreview={
                  <div className="bg-lightgreen-100 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#DBF7C9"
                token="Lightgreen/200"
                tokenPreview={
                  <div className="bg-lightgreen-200 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#CAF3B1"
                token="Lightgreen/300"
                tokenPreview={
                  <div className="bg-lightgreen-300 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#B9EF96"
                token="Lightgreen/400"
                tokenPreview={
                  <div className="bg-lightgreen-400 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#B0ED89"
                token="Lightgreen/500"
                tokenPreview={
                  <div className="bg-lightgreen-500 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#9FE96F"
                token="Lightgreen/600"
                tokenPreview={
                  <div className="bg-lightgreen-600 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#8FE657"
                token="Lightgreen/700"
                tokenPreview={
                  <div className="bg-lightgreen-700 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#7DE23D"
                token="Lightgreen/800"
                tokenPreview={
                  <div className="bg-lightgreen-800 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#6DDE25"
                token="Lightgreen/900"
                tokenPreview={
                  <div className="bg-lightgreen-900 aspect-square w-[12px] rounded-full" />
                }
              />
            </ColorTable>
          </section>

          <section className="flex h-fit w-full flex-col gap-[1.25rem]">
            <ColorCategoryTag label="Darkgreen" />
            <ColorTable>
              <ColorTable.TableHeader />
              <ColorTable.TableBody
                value="#EFFAF2"
                token="Darkgreen/50"
                tokenPreview={
                  <div className="bg-darkgreen-50 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#CEF1D6"
                token="Darkgreen/100"
                tokenPreview={
                  <div className="bg-darkgreen-100 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#B8EAC3"
                token="Darkgreen/200"
                tokenPreview={
                  <div className="bg-darkgreen-200 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#ACE7B9"
                token="Darkgreen/300"
                tokenPreview={
                  <div className="bg-darkgreen-300 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#88DC9B"
                token="Darkgreen/400"
                tokenPreview={
                  <div className="bg-darkgreen-400 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#67D27F"
                token="Darkgreen/500"
                tokenPreview={
                  <div className="bg-darkgreen-500 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#5DCF77"
                token="Darkgreen/600"
                tokenPreview={
                  <div className="bg-darkgreen-600 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#55C270"
                token="Darkgreen/700"
                tokenPreview={
                  <div className="bg-darkgreen-700 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#3AB859"
                token="Darkgreen/800"
                tokenPreview={
                  <div className="bg-darkgreen-800 aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="#30B450"
                token="Darkgreen/900"
                tokenPreview={
                  <div className="bg-darkgreen-900 aspect-square w-[12px] rounded-full" />
                }
              />
            </ColorTable>
          </section>
        </div>
      </div>
    )
  },
}

const Semantic: StoryObj = {
  render: () => {
    return (
      <div className="flex w-full flex-col">
        {/* header */}
        <div className="flex w-full flex-col gap-[2rem] bg-black px-[3.125rem] py-[2.8125rem]">
          <div className="flex items-start justify-between">
            <h1 className="text-[35px] leading-[40px] font-extrabold text-white not-italic">
              Semantic Color
            </h1>
            <h2 className="font-suit text-[12px] leading-[35px] font-[400] text-[#A6A6A6] not-italic">
              OHMO Design Library
            </h2>
          </div>
          <div className="font-suit text-[12px] leading-[16px] font-[400] whitespace-pre-line text-[#A6A6A6] not-italic">
            Semantic colors are used to convey the meaning or purpose of UI elements, rather than
            <br />
            focusing on specific hues. They create consistent visual cues for actions like
            success,error, warning, <br />
            or informational states,helping users quickly understand the function or status of each
            component.
          </div>
        </div>

        <div className="flex w-full flex-col gap-[3.125rem] px-[3.125rem] pt-[3.75rem] pb-[4.84375rem]">
          <section className="flex h-fit w-full flex-col gap-[1.25rem]">
            <ColorCategoryTag label="Text" />
            <ColorTable>
              <ColorTable.TableHeader />
              <ColorTable.TableBody
                value="Neutral/950"
                token="TextPrimary"
                valuePreview={
                  <div className="bg-semantic-text-primary aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="Neutral/700"
                token="TextSecondary"
                valuePreview={
                  <div className="bg-semantic-text-secondary aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="Neutral/650"
                token="TextTertiary"
                valuePreview={
                  <div className="bg-semantic-text-tertiary aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="Neutral/600"
                token="TextQuaternary"
                valuePreview={
                  <div className="bg-semantic-text-quaternary aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="Neutral/650"
                token="TextInfo-bold"
                valuePreview={
                  <div className="bg-semantic-text-info-bold aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="Mint/700"
                token="TextHighlight"
                valuePreview={
                  <div className="bg-semantic-text-highlight aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="Mint/700"
                token="TextSuccess"
                valuePreview={
                  <div className="bg-semantic-text-success aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="Red/700"
                token="TextDanger"
                valuePreview={
                  <div className="bg-semantic-text-danger aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="Neutral/550"
                token="TextDisabled"
                valuePreview={
                  <div className="bg-semantic-text-disabled aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="White"
                token="TextBgcolor"
                valuePreview={
                  <div className="bg-semantic-text-bg-color aspect-square w-[12px] rounded-full border border-black" />
                }
              />
            </ColorTable>
          </section>

          <section className="flex h-fit w-full flex-col gap-[1.25rem]">
            <ColorCategoryTag label="Background" />
            <ColorTable>
              <ColorTable.TableHeader />
              <ColorTable.TableBody
                value="White"
                token="BGPrimary"
                valuePreview={
                  <div className="bg-semantic-bg-primary aspect-square w-[12px] rounded-full border border-black" />
                }
              />
              <ColorTable.TableBody
                value="Neutral/150"
                token="BGSecondary"
                valuePreview={
                  <div className="bg-semantic-bg-secondary aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="Neutral/100"
                token="BGTertiary"
                valuePreview={
                  <div className="bg-semantic-bg-tertiary aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="Neutral/200"
                token="BGQuaternary"
                valuePreview={
                  <div className="bg-semantic-bg-quaternary aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="Red/50"
                token="BGDanger"
                valuePreview={
                  <div className="bg-semantic-bg-danger aspect-square w-[12px] rounded-full" />
                }
              />
            </ColorTable>
          </section>

          <section className="flex h-fit w-full flex-col gap-[1.25rem]">
            <ColorCategoryTag label="Border" />
            <ColorTable>
              <ColorTable.TableHeader />
              <ColorTable.TableBody
                value="Neutral/350"
                token="BorderPrimary"
                valuePreview={
                  <div className="bg-semantic-border-primary aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="Neutral/950"
                token="BorderSecondary"
                valuePreview={
                  <div className="bg-semantic-border-secondary aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="Neutral/450"
                token="BorderTertiary"
                valuePreview={
                  <div className="bg-semantic-border-tertiary aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="Red/700"
                token="BorderDanger"
                valuePreview={
                  <div className="bg-semantic-border-danger aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="Mint/700"
                token="BorderSuccess"
                valuePreview={
                  <div className="bg-semantic-border-success aspect-square w-[12px] rounded-full" />
                }
              />
            </ColorTable>
          </section>

          <section className="flex h-fit w-full flex-col gap-[1.25rem]">
            <ColorCategoryTag label="Color-fill" />
            <ColorTable>
              <ColorTable.TableHeader />
              <ColorTable.TableBody
                value="Neutral/100"
                token="ColorfillPrimary"
                valuePreview={
                  <div className="bg-semantic-color-fill-primary aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="Neutral/150"
                token="ColorfillSecondary"
                valuePreview={
                  <div className="bg-semantic-color-fill-secondary aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="Neutral/300"
                token="ColorfillDisabled"
                valuePreview={
                  <div className="bg-semantic-color-fill-disabled aspect-square w-[12px] rounded-full" />
                }
              />
              <ColorTable.TableBody
                value="Red/700"
                token="ColorfillDanger"
                valuePreview={
                  <div className="bg-semantic-color-fill-danger aspect-square w-[12px] rounded-full" />
                }
              />
            </ColorTable>
          </section>
        </div>
      </div>
    )
  },
}

export { Primitive, Semantic }

type Props = {
  iconComponent?: ReactNode
  label: string
}

const ColorCategoryTag = (props: Props) => {
  const { iconComponent, label } = props
  return (
    <div className="flex w-fit items-center justify-center gap-[0.3125rem] rounded-[5px] bg-[#F7F7F7] px-[0.3125rem] py-[0.625rem]">
      {iconComponent && iconComponent}
      <p className="text-justify text-[15px] leading-[11px] font-[700] text-[#000] not-italic">
        {label}
      </p>
    </div>
  )
}

const ColorTable = ({ children }: PropsWithChildren) => {
  return <table className='"flex flex-col" w-full'>{children}</table>
}

ColorTable.TableHeader = () => {
  return (
    <th className="grid h-[3.125rem] grid-cols-[1fr_3fr] items-center justify-center py-[0.3125rem]">
      <tr className="flex h-full w-full items-center justify-center bg-[#F7F7F7]">
        <p className="text-center text-[12px] leading-[11px] font-[600] text-[#000] not-italic">
          Value
        </p>
      </tr>
      <tr className="flex h-full w-full items-center justify-center bg-[#EFEFEF] text-center text-[12px] leading-[11px] font-[600] text-[#000] not-italic">
        <p className="text-center text-[12px] leading-[11px] font-[600] text-[#000] not-italic">
          Token
        </p>
      </tr>
    </th>
  )
}
type TableBodyProps = {
  value: string
  token: string
  valuePreview?: ReactNode
  tokenPreview?: ReactNode
}

ColorTable.TableBody = (props: TableBodyProps) => {
  const { value, token, valuePreview, tokenPreview } = props
  return (
    <tbody className="grid h-[3.125rem] w-full grid-cols-[1fr_3fr] items-center justify-center border-b border-neutral-400 px-[12px] py-[5px]">
      <tr className="mr-[12px] flex h-full w-full items-center gap-[6px]">
        {valuePreview && valuePreview}
        <p className="font-suit text-center text-[10px] leading-[11px] font-[500] text-[#000] not-italic">
          {value}
        </p>
      </tr>
      <tr className="mr-[12px] flex h-full w-full items-center gap-[6px]">
        {tokenPreview && tokenPreview}
        <p className="font-suit text-center text-[10px] leading-[11px] font-[500] text-[#000] not-italic">
          {token}
        </p>
      </tr>
    </tbody>
  )
}
