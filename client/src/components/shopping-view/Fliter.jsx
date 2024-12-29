import { filterOptions } from '@/config'
import React from 'react'
import { Label } from '../ui/label'
import { Checkbox } from '../ui/checkbox'
import { Separator } from '../ui/separator'

function Fliter() {
  return (
    <div className='bg-background rounded-lg  shadow-sm'>
      <div className="p-4  border-b">
        <h2 className='text-lg  font-light'>filter</h2>
      </div>
      <div className="p-4  space-y-4">
        {
          Object.keys(filterOptions).map(item=><>
            <div className="">
              <h3>{item}</h3>
              <div className="grid gap-2 mt-2">
                {
                  filterOptions[item].map(option=><Label className='flex font-extralight items-center gap-2'>
                    <Checkbox/>
                    {option.label}
                  </Label>)
                }
                <Separator/>
              </div>
            </div>
          </>)
        }
      </div>
    </div>
  )
}

export default Fliter
