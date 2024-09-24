import React from 'react'

const CodeGraphic = () => {
    return (
        <div className="w-full flex justify-center brightness-90 px-4 sm:px-0">
            <div className="mockup-code w-full sm:w-2/3 text-xs md:text-base " id='dominoes'>
                <pre data-prefix="$"><code>npm install childhood</code></pre>
                <pre data-prefix=">" className="text-warning"><code>Dad: Don&apos;t be afraid of the unknown.</code></pre>
                <pre data-prefix=">" className="text-warning"><code>Mom: Be kind to the world.</code></pre>
                <pre data-prefix="?" className="text-error"><code>Brothers: Try not to mess up.</code></pre>
                <pre data-prefix=">" className="text-success"><code>Brothers: We love you.</code></pre>
                <pre data-prefix=">" className=""><code>...</code></pre>
            </div>
        </div>
    )
}

export default CodeGraphic